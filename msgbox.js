//信息窗口
Vue.component('sro-msgbox', {
	template: `
    <div v-show="show" @mousedown="thisClick" style="position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);" v-bind:style="{ zIndex:zIndex }">
    	<div class="msgbox-header" style="display: flex;" v-drag>
    		<div class="msgbox-header-cur" style="text-align: center;" v-bind:style="{ width:width+'px' }">
    			<span style="color: white;font-size: 12px;">{{title}}</span>
    		</div>
    	</div>
    	<div class="msgbox-content" style="display: flex;" v-bind:style="{ height: height + 'px' }">
    		<div class="msgbox-content-cur" style="overflow-y: auto;overflow-x: none;" v-bind:style="{ height: height + 'px',width:width+'px' }">
    		</div>
    	</div>
    	<div class="msgbox-footer" style="display: flex;">
    		<div class="msgbox-footer-cur" v-bind:style="{ width:width+'px' }">
    		</div>
    	</div>
		<div style="position: absolute;top:50px;left:2.5%;width:95%;text-align:center" v-html="content"></div>
		<div style="position: absolute;bottom:10px;text-align:center;width:100%"><button @click="hide" class="btn-primary">确定</button></div>
	
		
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
		content: {
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
			zIndex: 1000
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
Vue.component('sro-msgbox-a', {
	template: `
    <div v-show="show" @mousedown="thisClick" style="position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);" v-bind:style="{ zIndex:zIndex }">
    	<div class="msgbox-a-header" style="display: flex;" v-drag>
    		<div class="msgbox-a-header-cur" style="text-align: center;" v-bind:style="{ width:width+'px' }">
    		</div>
    	</div>
    	<div class="msgbox-a-content" style="display: flex;" v-bind:style="{ height: height + 'px' }">
    		<div class="msgbox-a-content-cur" style="overflow-y: auto;overflow-x: hidden;" v-bind:style="{ height: height + 'px',width:width+'px' }">
    		</div>
    	</div>
    	<div class="msgbox-a-footer" style="display: flex;">
    		<div class="msgbox-a-footer-cur" v-bind:style="{ width:width+'px' }">
    		</div>
    	</div>
		<div style="position: absolute;top:50px;left:2.5%;width:95%;text-align:center" v-html="content"></div>
		
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
		content: {
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
			zIndex: 1000
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
