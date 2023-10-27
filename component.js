
//丝路窗口
Vue.component('sro-window', {
	template: `
    <div v-show="show"  @mousedown="thisClick" style="position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);" v-bind:style="{ zIndex:zIndex }">
    	<div class="mframe-header" style="display: flex;" v-drag>
    		<div class="mframe-header-cur" style="text-align: center;" v-bind:style="{ width:width+'px' }">
    			<span style="color: white;font-size: 12px;">{{title}}</span>
    		</div>
    		<button @click="hide" class="btn-close"></button>
    	</div>
    	<div class="mframe-content" style="display: flex;" v-bind:style="{ height: height + 'px' }">
    		<div class="mframe-content-cur" style="overflow-y: auto;overflow-x: none;" v-bind:style="{ height: height + 'px',width:width+'px' }">
    		</div>
    	</div>
    	<div class="mframe-footer" style="display: flex;">
    		<div class="mframe-footer-cur" v-bind:style="{ width:width+'px' }">
    		</div>
    	</div>
		<div style="position: absolute;top:50px;left:2.5%;width:95%;height:85%"><slot/></div>
    </div>
    `,
	props: {
		visible: {
			type: Boolean,
			default: false,
		}, 
		title: {
			type: String,
			default: '',
		},
		height: {
			type: Number,
			default: 100,
		},
		width: {
			type: Number,
			default: 100,
		}
	},
	data() {
		return {
			show: false,
			zIndex: 999
		}
	},
	watch: {
		visible(val) {
			this.show = val
		}

	},
	computed: {

	},
	created() {
		this.show = this.visible
		Event.$on("focus", (context, zIndex) => {
			if (context !== this) {
				this.zIndex--;
			}
		})
	},
	methods: {
		hide() {
			this.$emit("hide");
		},
		thisClick() {
			this.zIndex = 999;
			Event.$emit("focus", this, this.zIndex)
		}
	}
});
Vue.component('sro-sframe', {
	template: `
    <div class="sro-sframe">
    	<div class="sframe-header" style="display: flex;" v-drag>
    		<div class="sframe-header-cur" style="text-align: center;" v-bind:style="{ width:width+'%' }">
    			<span style="color: white;font-size: 12px;">{{title}}</span>
    		</div>
    	</div>
    	<div class="sframe-content" style="display: flex;" v-bind:style="{ height: height + 'px' }">
    		<div class="sframe-content-cur" style="overflow-y: auto;overflow-x: hidden;" v-bind:style="{ height: height + 'px',width:width+'%' }">
			<slot/>
    		</div>
    	</div>
    	<div class="sframe-footer" style="display: flex;">
    		<div class="sframe-footer-cur" v-bind:style="{ width:width+'%' }">
    		</div>
    	</div>
    </div>
    `,
	props: {
		title: {
			type: String,
			default: '',
		},
		height: {
			type: Number,
			default: 100,
		},
		width: {
			type: Number,
			default: 100,
		}
	},
	data() {
		return {}
	},
	watch: {},
	computed: {

	},
	created() {

	},
	methods: {}
});
Vue.component('sro-pane', {
	template: `
    <div>
    	<div class="msgbox-a-header" style="display: flex;" v-drag>
    		<div class="msgbox-a-header-cur" style="text-align: center;" v-bind:style="{ width:width }">
    		</div>
    	</div>
    	<div class="msgbox-a-content" style="display: flex;" v-bind:style="{ height: height }">
    		<div class="msgbox-a-content-cur" style="overflow-y: auto;overflow-x: hidden;height:100%" v-bind:style="{ width:width }">
    			<slot/>
			</div>
    	</div>
    	<div class="msgbox-a-footer" style="display: flex;">
    		<div class="msgbox-a-footer-cur" v-bind:style="{ width:width }">
    		</div>
    	</div>
    </div>
    `,
	props: {

		height: {
			type: String,
			default: "92%",
		},
		width: {
			type: String,
			default: "100%",
		}
	},
	data() {
		return {
		}
	}
});
Vue.component('sro-tabs', {
	template: `
    <div>
		<div style="position:fixed;top:50px">
			<button class="tab-primary"  v-for="(item,key) in tabs" @click="index=item.name" :class="{tabActive:index==item.name}">{{item.label}}</button>
		</div>
		<sro-pane style="margin-top:20px;height:90%">
			<div ref="content"><slot></slot></div>
		</sro-pane>
    </div>
    `,
	props: {

		height: {
			type: String,
			default: "95%",
		},
		width: {
			type: String,
			default: "100%",
		}
	},
	data() {
		return {
			index:"",
			length:0,
			tabs:[
				
			]
		}
	},
	mounted() {
		console.info(this.$refs.content.children);
		for(let index=0;index<this.$refs.content.children.length;index++){
			let item=this.$refs.content.children.item(index);
			this.tabs.push({
				name:item.getAttribute("name"),
				label:item.getAttribute("label")
			});
		}
		this.index=this.tabs[0].name;
		console.info(this.tabs);
	}
});

Vue.component('sro-tab-pane', {
	template: `
    <div v-show="$parent.$parent.index==name" :name="name" :label="label">
		<slot></slot>
    </div>
    `,
	props: {

		name: {
			type: String
		},
		label: {
			type: String
		}
	},
	data() {
		return {
			index:""
		}
	},
	mounted() {
		console.info(this.$parent);
		
	}

});


Vue.component('sro-item', {
	template: `
		<div @click="click" style="height: 30px;width: 30px;position:relative;">
			<div class="sro-item" style="height: 30px;width: 30px;position:absolute;left:1px;top:1px" :class="{rarity:item.Rarity==2}"></div>
			<img v-if="item.Rarity==2" style="height: 30px;width: 30px;position:absolute;left:1px;top:1px" src="./image/rareglow.gif"></img>
			<span v-if="item.Num&&item.Num>1" style="position:absolute;font-size:10px;text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;left:2px;top:1px">{{item.Num}}</span>
			<img v-if="item.DDJ" :src="'http://client/'+icon+item.DDJ" />
		</div>
    `,
	props: {
		slot_key:{
			type: Number
		},
		item: {
		},
		icon:{
			type: String,
			default:""
		}
	},
	data() {
		return {
			index:""
		}
		
	},
	methods:{
		click(){
			
			Event.$emit("setCurItem",{
				Slot:this.slot_key,
				Item:this.item,
				Icon:this.icon
			});
		}
	},
	created() {
		
	},
	watch:{
		
	}
});
Vue.component('sro-knapsack', {
	template: `
<sro-tabs>
								<sro-tab-pane name="store1" label="所有品" style="padding: 5px;text-align: center;">

									<div style="width: 140px;text-align: center;" >
										<el-row>
											<el-col v-for="index in 32" :key="index"  :span="6">
												<div style="height: 36px;width: 36px;" :style="getSlotBg(index)">
													<sro-item :slot_key="index-1" :item="knapsack[index-1]?knapsack[index-1]:false" />
													
												</div>
											</el-col>
										</el-row>
									</div>
								</sro-tab-pane>

								<sro-tab-pane name="store2" label="扩张" style="padding: 5px;text-align: center;">
									<div style="width: 140px;text-align: center;">
										<el-row>
											<el-col v-for="index in 32" :key="index" :span="6">
												<div style="height: 36px;width: 36px;" :style="getSlotBg(index)">
													
													<sro-item  :slot_key="index-1+32" :item="knapsack[index-1+32]?knapsack[index-1+32]:false" />
												</div>
											</el-col>
										</el-row>
									</div>
								</sro-tab-pane>

								<sro-tab-pane name="store3" label="扩张2" style="padding: 5px;text-align: center;">
									<div style="width: 140px;text-align: center;">
										<el-row>
											<el-col v-for="index in 32" :key="index"  :span="6">
												<div style="height: 36px;width: 36px;" :style="getSlotBg(index)">
													<sro-item  :slot_key="index-1+64" :item="knapsack[index-1+64]?knapsack[index-1+64]:false" />
												</div>
											</el-col>
										</el-row>
									</div>
								</sro-tab-pane>

							</sro-tabs>
    `,
	props: {

		knapsack: {
			type: Array
		}
	},
	data() {
		return {
		}
	},
	methods:{
		getSlotBg(index, max = 32, num = 4) {
			if (index == max) {
				return 'background: url(http://client/interface/ifcommon/lattice_window/com_lattice_right_down.ddj)  no-repeat;'
			}
			if (index > (max - num)) {
				return 'background: url(http://client/interface/ifcommon/lattice_window/com_lattice_left_down.ddj)  no-repeat;'
			}
		
			if (index % num) {
				return 'background: url(http://client/interface/ifcommon/lattice_window/com_lattice_left_up.ddj)  no-repeat;'
			} else {
				return 'background: url(http://client/interface/ifcommon/lattice_window/com_lattice_right_up.ddj)  no-repeat;'
			}
		}
	},
	mounted() {
		console.info(this.$parent);
		
	}

});
