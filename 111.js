(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-31bdfcb0"], {
		7113: function(t, n, a) {
			"use strict";
			a.r(n);
			var s = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "container"
					}, [n("my-loading", {
						attrs: {
							myloading: t.isLoading
						}
					}), 1 === t.step ? n("div", {
						staticClass: "confirmation-box"
					}, [n("Notice", {
						ref: "notice",
						attrs: {
							lat: t.lat,
							lng: t.lng
						},
						on: {
							transferEvt: t.fBtnEvt
						}
					})], 1) : t._e(), 2 === t.step ? n("div", {
						staticClass: "notice-box"
					}, [n("Confirmation", {
						ref: "confirmation",
						attrs: {
							lat: t.lat,
							lng: t.lng
						},
						on: {
							transferEvt: t.fBtnEvt
						}
					})], 1) : t._e(), n("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 3 === t.step,
							expression: "step === 3"
						}],
						staticClass: "startExam-box"
					}, [n("div", {
						staticClass: "container-video"
					}, [n("div", {
							staticClass: "open-exam"
						}, [t._v(" " + t._s("1" == this.infoData.examAnswer.examMode ? "开卷" : "闭卷") + " ")]), "1" == this.infoData
						.examAnswer.examMode ? n("div", {
							staticClass: "triangle-box triangle-open"
						}) : n("div", {
							staticClass: "triangle-box triangle-close"
						}), n("div", {
							staticClass: "date-container"
						}, [n("div", [t._v("星期" + t._s(t.weekArr[t.week]))]), n("div", [t._v(t._s(t.hours) + ":" + t._s(t.minutes) +
							":" + t._s(t.seconds))]), n("div", [t._v(t._s(t.date))])]), n("div", {
							staticClass: "exam-info"
						}, [n("div", {
							staticClass: "exam-info-item"
						}, [n("span", {
							staticClass: "exam-info-item-title"
						}, [t._v("考生姓名：")]), n("span", [t._v(t._s(t.infoData.student.stuName || "-"))])]), n("div", {
							staticClass: "exam-info-item"
						}, [n("span", {
							staticClass: "exam-info-item-title"
						}, [t._v("身份证号：")]), n("span", [t._v(t._s(t.infoData.student.idCard || ""))])]), n("div", {
							staticClass: "exam-info-item"
						}, [n("span", {
							staticClass: "exam-info-item-title"
						}, [t._v("考试课程：")]), n("span", [t._v(t._s(t.infoData.examAnswer.examinationCourseName || "-"))])]), n(
							"div", {
								staticClass: "exam-info-item"
							}, [n("span", {
								staticClass: "exam-info-item-title"
							}, [t._v("考生座位：")]), n("span", [t._v(t._s(t.infoData.examAnswer.seat || "-") + "号")])]), n("div", {
							staticClass: "exam-info-item exam-progress"
						}, [n("span", {
							staticClass: "exam-info-item-title"
						}, [t._v("考试进度：")]), n("el-progress", {
							staticClass: "my-el-exam-progress",
							attrs: {
								percentage: t.progressValue,
								color: "#33c58f"
							}
						})], 1), n("div", {
							staticClass: "exam-info-item"
						}, [n("span", {
							staticClass: "exam-info-item-title"
						}, [t._v("网络状态：")]), t.wifiStatus ? n("span", {
							staticClass: "wifi-true"
						}, [t._v("正常")]) : t._e(), t.wifiStatus ? t._e() : n("span", {
							staticClass: "wifi-false"
						}, [t._v("异常")])])]), n("img", {
							staticStyle: {
								"margin-bottom": "10px",
								width: "100%"
							},
							attrs: {
								src: t.imgUrl,
								alt: "",
								width: "260px"
							}
						}), n("canvas", {
							ref: "picture",
							staticStyle: {
								display: "none"
							},
							attrs: {
								id: "picture"
							}
						})
					]), n("div", {
						staticClass: "container-left"
					}, [n("div", {
						staticClass: "exam-question",
						style: {
							zoom: t.zoomScale + "%"
						}
					}, [t.showAnswerSheet ? t._l(t.listData, (function(e, a) {
						return n("div", {
							key: a,
							class: e.id === t.currentObj.id ? "exam-question-block current" : "exam-question-block"
						}, [1 === e.proTypeCode ? n("radio-question", {
							ref: "radioQuestion",
							refInFor: !0,
							attrs: {
								qsData: e
							},
							on: {
								setAnswerObj: t.setAnswerObj
							}
						}) : t._e(), 2 === e.proTypeCode || 3 === e.proTypeCode ? n("check-question", {
							ref: "checkQuestion",
							refInFor: !0,
							attrs: {
								qsData: e
							},
							on: {
								setAnswerObj: t.setAnswerObj
							}
						}) : t._e(), 4 === e.proTypeCode ? n("judge-question", {
							ref: "judgeQuestion",
							refInFor: !0,
							attrs: {
								qsData: e
							},
							on: {
								setAnswerObj: t.setAnswerObj
							}
						}) : t._e(), 5 === e.proTypeCode || 6 === e.proTypeCode ? n("blank-question", {
							ref: "blankQuestion",
							refInFor: !0,
							attrs: {
								qsData: e,
								infoData: t.infoData
							},
							on: {
								setAnswerObj: t.setAnswerObj
							}
						}) : t._e(), 7 === e.proTypeCode ? n("line-question", {
							ref: "lineQuestion",
							refInFor: !0,
							attrs: {
								qsData: e
							},
							on: {
								setAnswerObj: t.setAnswerObj
							}
						}) : t._e(), 8 === e.proTypeCode ? n("match-question", {
							ref: "matchQuestion",
							refInFor: !0,
							attrs: {
								qsData: e
							},
							on: {
								setAnswerObj: t.setAnswerObj
							}
						}) : t._e(), 9 === e.proTypeCode ? n("colligate-question", {
							ref: "matchQuestion",
							refInFor: !0,
							attrs: {
								qsData: e,
								infoData: t.infoData
							},
							on: {
								setAnswerObj: t.setAnswerObj
							}
						}) : t._e()], 1)
					})) : t._e()], 2), n("div", {
						staticClass: "exam-scale-button"
					}, [n("div", {
						staticClass: "scale-item",
						on: {
							click: t.plusZoom
						}
					}, [n("i", {
						staticClass: "el-icon-plus"
					})]), n("div", {
						staticClass: "scale-item",
						on: {
							click: t.minusZoom
						}
					}, [n("i", {
						staticClass: "el-icon-minus"
					})])]), n("div", {
						staticClass: "exam-button"
					}, [n("div", {
						staticClass: "change-question"
					}, [n("el-button", {
						staticClass: "icon-button",
						attrs: {
							type: "primary",
							icon: "iconfont icon-shangyige"
						},
						on: {
							click: t.submitPrev
						}
					}, [t._v("上一题")]), n("el-button", {
						staticClass: "icon-button",
						attrs: {
							type: "primary",
							icon: "iconfont icon-xiayige"
						},
						on: {
							click: t.submitNext
						}
					}, [t._v("下一题")])], 1), n("div", {}, [n("el-button", {
						staticClass: "icon-button",
						attrs: {
							type: "primary"
						},
						on: {
							click: function(e) {
								t.paperVisible = !0
							}
						}
					}, [t._v("试卷预览")])], 1), n("div", {
						staticClass: "change-question"
					}, [n("el-button", {
						staticClass: "icon-button",
						attrs: {
							type: "primary",
							icon: "iconfont icon-daochu"
						},
						on: {
							click: function(e) {
								return t.exportAnswer()
							}
						}
					}, [t._v("导出答卷")]), n("el-button", {
						staticClass: "icon-button",
						attrs: {
							type: "primary",
							icon: "iconfont icon-shangchuan"
						},
						on: {
							click: function(e) {
								return t.submitExam("1")
							}
						}
					}, [t._v("交卷")])], 1)])]), n("div", {
						staticClass: "container-right"
					}, [t.showAnswerSheet && 3 === t.step ? n("answer-sheet", {
						ref: "answerSheet",
						attrs: {
							data: t.qsdata,
							ksjssj: t.infoData.examAnswer.sessionEnd,
							currentTime: t.infoData.now
						},
						on: {
							setCurrentObj: t.setCurrentObj,
							timeOut: t.timeOut
						}
					}) : t._e()], 1)]), n("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 3 === t.step,
							expression: "step === 3"
						}],
						staticClass: "plan-info-container"
					}, [n("div", [n("span", [t._v("当前考试计划： "), n("span", [t._v(t._s(t.infoData.examAnswer.placeExaminationPlanName ||
						""))])])]), n("div", {
						staticStyle: {
							"margin-top": "8px"
						}
					}, [n("span", [t._v("考点名称："), n("span", [t._v(t._s(t.infoData.examAnswer.examSiteName || ""))])]), n(
						"span", {
							staticStyle: {
								"margin-left": "8px"
							}
						}, [t._v("考点编号："), n("span", [t._v(t._s(t.infoData.examAnswer.examSiteCode || ""))])]), n("span", {
						staticStyle: {
							"margin-left": "8px"
						}
					}, [t._v("考场编号："), n("span", [t._v(t._s(t.infoData.examAnswer.roomCode || ""))])])])]), n("el-dialog", {
						directives: [{
							name: "el-drag-dialog",
							rawName: "v-el-drag-dialog"
						}],
						staticClass: "my-el-dialog-form-container",
						attrs: {
							title: "提示",
							visible: t.dialogVisible,
							"append-to-body": !0,
							"before-close": t.handleClose,
							"close-on-click-modal": !1,
							width: "30%"
						},
						on: {
							"update:visible": function(e) {
								t.dialogVisible = e
							}
						}
					}, [n("div", {
						staticClass: "prompt-container"
					}, [n("img", {
						attrs: {
							src: a("d28f"),
							alt: ""
						}
					}), n("span", [t._v(t._s(t.dialogContent))])])]), n("el-drawer", {
						staticClass: "paper-drawer",
						attrs: {
							title: "试卷预览",
							visible: t.paperVisible,
							"modal-append-to-body": !1,
							"destroy-on-close": !0,
							"before-close": t.handlePaperClose,
							size: "50%"
						},
						on: {
							"update:visible": function(e) {
								t.paperVisible = e
							}
						}
					}, [n("paper-view", {
						ref: "PaperView",
						attrs: {
							infoData: t.infoData,
							paper: t.qsdata
						}
					})], 1)], 1)
				},
				r = [],
				o = a("ade3"),
				i = a("2909"),
				c = a("1da1"),
				l = (a("ac1f"),
					a("1276"),
					a("99af"),
					a("ace4"),
					a("d3b7"),
					a("5cc6"),
					a("9a8c"),
					a("a975"),
					a("735e"),
					a("c1ac"),
					a("d139"),
					a("3a7b"),
					a("d5d6"),
					a("82f8"),
					a("e91f"),
					a("60bd"),
					a("5f96"),
					a("3280"),
					a("3fcc"),
					a("ca91"),
					a("25a1"),
					a("cd26"),
					a("3c5d"),
					a("2954"),
					a("649e"),
					a("219c"),
					a("170b"),
					a("b39a"),
					a("72f7"),
					a("a9e3"),
					a("d81d"),
					a("159b"),
					a("4de4"),
					a("07ac"),
					a("caad"),
					a("2532"),
					a("466d"),
					a("5319"),
					a("96cf"),
					a("1c6f")),
				u = a("e2c6"),
				p = a("adf7"),
				d = a("a21f"),
				f = a("69f6"),
				m = a("96e8"),
				h = a("2024"),
				g = a("44d7"),
				b = a("f0c8"),
				w = a("a46d"),
				v = a("50f8"),
				x = a("7ac2"),
				O = a("403a"),
				C = a("2ef0"),
				j = a.n(C),
				I = a("b775"),
				y = a("4328"),
				S = a.n(y),
				D = (a("5f87"),
					a("c24f"),
					function(t) {
						return Object(I["a"])({
							url: t,
							method: "get"
						})
					}
				),
				k = function(t, e, n) {
					var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
						s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
					return Object(I["a"])({
						url: t,
						method: "post",
						params: {
							current: e,
							size: n,
							ksjhId: a,
							ssdm: s
						}
					})
				},
				A = function(t, e) {
					return Object(I["a"])({
						url: t,
						method: "post",
						data: S.a.stringify(e)
					})
				},
				T = function(t, e) {
					return Object(I["a"])({
						url: t,
						method: "post",
						data: S.a.stringify(e)
					})
				},
				_ = function(t) {
					return Object(I["a"])({
						url: t,
						method: "get"
					})
				},
				B = function(t, e) {
					return Object(I["a"])({
						url: t,
						method: "post",
						data: S.a.stringify(e, {
							arrayFormat: "indices",
							allowDots: !0
						})
					})
				},
				V = function(t, e) {
					return Object(I["a"])({
						url: t,
						method: "post",
						data: e,
						headers: {
							"Content-Type": "multipart/form-data"
						}
					})
				},
				L = {
					queryAll: D,
					query: k,
					submit: A,
					delete: T,
					get: _,
					post: B,
					fileData: V
				},
				M = L,
				E = a("a888"),
				q = a("5118"),
				N = a("c1df"),
				P = a.n(N),
				R = a("acff"),
				$ = a("5c96"),
				F = a("ed08"),
				W = {
					directives: {
						elDragDialog: E["a"]
					},
					name: "",
					components: {
						Confirmation: w["default"],
						Notice: v["default"],
						AnswerSheet: l["a"],
						RadioQuestion: u["a"],
						CheckQuestion: p["a"],
						BlankQuestion: m["a"],
						JudgeQuestion: h["a"],
						LineQuestion: d["a"],
						MatchQuestion: f["a"],
						ColligateQuestion: g["a"],
						myLoading: x["a"],
						PaperView: b["a"]
					},
					data: function() {
						return {
							imgUrl: "",
							dialogVisible: !1,
							dialogContent: "",
							myVideo: {},
							constraints: {
								audio: {
									noiseSuppression: !0,
									echoCancellation: !0
								},
								video: {
									width: 1920,
									height: 1080,
									frameRate: 30,
									facingMode: "environment"
								}
							},
							localStream: void 0,
							step: 1,
							isLoading: !1,
							currentIndex: 0,
							qsdata: null,
							listData: [],
							currentObj: null,
							answerObj: {},
							showAnswerSheet: !1,
							progressValue: 0,
							infoData: {
								examAnswer: {},
								now: "",
								student: {}
							},
							lat: "",
							lng: "",
							fullPath: "",
							deviceFlag: !1,
							timer: null,
							week: "",
							weekArr: ["天", "一", "二", "三", "四", "五", "六"],
							hours: "",
							minutes: "",
							seconds: "",
							date: "",
							wifiStatus: !0,
							zoomScale: 120,
							isStep: !1,
							paperVisible: !1
						}
					},
					mounted: function() {
						console.log("mounted"),
							this.fullPath = this.$route.fullPath,
							this.step = localStorage.getItem("startExamStep") ? parseInt(localStorage.getItem("startExamStep")) : 1,
							console.log("mounted", this.step),
							this.myVideo = document.getElementById("localVideo"),
							3 === this.step && this.getInfoData()
					},
					created: function() {
						console.log("mount", this.step),
							console.log("mount", this.isStep)
					},
					methods: {
						handlePaperClose: function(t) {
							t()
						},
						getInfoData: function() {
							var t = arguments,
								e = this;
							return Object(c["a"])(regeneratorRuntime.mark((function n() {
								var a, s;
								return regeneratorRuntime.wrap((function(n) {
									while (1)
										switch (n.prev = n.next) {
											case 0:
												return a = t.length > 0 && void 0 !== t[0] && t[0],
													n.next = 3,
													e.findDataToBeTested();
											case 3:
												if (s = n.sent,
													"success" !== s.status) {
													n.next = 11;
													break
												}
												return e.infoData = s.data,
													console.log("信息", e.infoData),
													e.imgUrl = O["b"].fileBaseUrl + "/" + e.infoData.student.imgPath,
													n.next = 10,
													e.init();
											case 10:
												a && e.submitFun();
											case 11:
											case "end":
												return n.stop()
										}
								}), n)
							})))()
						},
						startIntervalWifiStatus: function() {
							var t = this,
								e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
							console.log("start");
							var n = this;
							n.wifiStatus = !1;
							var a = 0;
							n.intervalWifiStatus = Object(q["setInterval"])((function() {
									var e = n.wifiStatus;
									e ? n.stopIntervalWifiStatus() : a += 1,
										120 === a && (Object($["MessageBox"])({
												title: "网络异常",
												message: "当前网络断开，请联系监考老师检查",
												type: "warning",
												showCancelButton: !1,
												callback: function() {
													t.isLoading = !1
												}
											}),
											Object(q["clearInterval"])(t.intervalWifiStatus))
								}), 1e3),
								n.intervalConnectWifi = Object(q["setInterval"])((function() {
									var a = n;
									1 == e && (console.log("请求 api 1"),
											t.submitAnswer().then((function() {
												a.stopIntervalWifiStatus(),
													console.log("网络恢复")
											})).catch((function(t) {
												console.log("请求 api 1 error" + t)
											}))),
										2 == e && t.findDataToBeTested().then((function() {
											console.log("请求 api 2"),
												a.stopIntervalWifiStatus(),
												console.log("网络恢复")
										})).catch((function(t) {
											console.log("请求 api 2 error" + t)
										}))
								}), 1e4)
						},
						stopIntervalWifiStatus: function() {
							console.log("stop"),
								this.wifiStatus = !0,
								this.intervalWifiStatus && Object(q["clearInterval"])(this.intervalWifiStatus),
								this.intervalConnectWifi && Object(q["clearInterval"])(this.intervalConnectWifi)
						},
						timeCountDown: function() {
							var t = this,
								e = this.infoData.now;
							if (this.timer2 && Object(q["clearInterval"])(this.timer2),
								e) {
								var n = new Date(e).getTime(),
									a = new Date(n);
								this.week = new Date(e).getDay();
								var s = e.split(" ")[0].split("-");
								this.date = "".concat(s[0], "年").concat(s[1], "月").concat(s[2], "日"),
									this.timer2 = Object(q["setInterval"])((function() {
										var e = a,
											n = e.getHours(),
											s = e.getMinutes(),
											r = e.getSeconds();
										t.hours = n < 10 ? "0" + n : n,
											t.minutes = s < 10 ? "0" + s : s,
											t.seconds = r < 10 ? "0" + r : r,
											a = new Date(e.getTime() + 1e3)
									}), 1e3)
							}
						},
						takePhoto: function() {
							var t = document.createElement("canvas");
							t.width = this.myVideo.videoWidth,
								t.height = this.myVideo.videoHeight,
								t.getContext("2d").drawImage(this.myVideo, 0, 0, t.width, t.height);
							var e = t.toDataURL();
							e && "data:," !== e && (document.querySelector("#tttt").href = t.toDataURL(),
								document.querySelector("#tttt").download = "拍照.png",
								document.querySelector("#tttt").click())
						},
						getUserMedia: function() {
							var t = arguments,
								e = this;
							return Object(c["a"])(regeneratorRuntime.mark((function n() {
								var a, s;
								return regeneratorRuntime.wrap((function(n) {
									while (1)
										switch (n.prev = n.next) {
											case 0:
												if (a = t.length > 0 && void 0 !== t[0] && t[0],
													!("mediaDevices" in navigator)) {
													n.next = 16;
													break
												}
												return n.prev = 2,
													n.next = 5,
													navigator.mediaDevices.getUserMedia(e.constraints);
											case 5:
												s = n.sent,
													!a && (e.myVideo.srcObject = s),
													!a && (e.localStream = s),
													e.deviceFlag = !1,
													n.next = 16;
												break;
											case 11:
												n.prev = 11,
													n.t0 = n["catch"](2),
													console.log("获取音视频设备报错: ".concat(n.t0)),
													e.deviceFlag = !0,
													e.dialogVisible;
											case 16:
											case "end":
												return n.stop()
										}
								}), n, null, [
									[2, 11]
								])
							})))()
						},
						getUnZip: function(t) {
							return Object(c["a"])(regeneratorRuntime.mark((function e() {
								var n, a, s;
								return regeneratorRuntime.wrap((function(e) {
									
									while (1)
										switch (e.prev = e.next) {
											case 0:
												return n = function(t) {
														for (var e = [], n = 0, a = t.length; n < a; ++n)
															e.push(t.charCodeAt(n));
														var s = new Uint8Array(e);
														return s
													},
													a = n(t),
													console.info(R["a"].inflate),
													s = R["a"].inflate(a, {
														to: "string"
													}),
													e.abrupt("return", JSON.parse(Object(O["a"])(s)));
											case 4:
											case "end":
												return e.stop()
										}
								}), e)
							})))()
						},
						init: function() {
							var t = this;
							return Object(c["a"])(regeneratorRuntime.mark((function e() {
								var n, a, s, r, o;
								return regeneratorRuntime.wrap((function(e) {
									while (1)
										switch (e.prev = e.next) {
											case 0:
												return t.isLoading = !0,
													t.showAnswerSheet = !1,
													n = Number(localStorage.getItem("pagination") || 0),
													t.dtkId = t.infoData && t.infoData.examAnswer && t.infoData.examAnswer.id ? t.infoData.examAnswer
													.id : localStorage.getItem("dtkId") || "",
													localStorage.setItem("dtkId", t.dtkid),
													t.currentIndex = t.dtkId && t.dtkId === t.infoData.examAnswer.id ? n : 0,
													t.listData = [],
													t.timeCountDown(),
													e.next = 10,
													M.get("//" + window.location.host + "/" + t.infoData.examAnswer.testPaperPath);
											case 10:
												return a = e.sent,
													e.next = 13,
													console.info(a),
													t.getUnZip(a);
											case 13:
												a = e.sent,
													console.error("试卷result = ", a),
													t.answerObj = {},
													s = JSON.parse(localStorage.getItem("daObj") || "{}") || {},
													r = JSON.parse(localStorage.getItem("answerJsonObj") || "{}") || {},
													r.dtkId === t.dtkId ? s = r.jsonObj || {} : localStorage.setItem("answerJsonObj", null),
													o = (a.proGroupVoList || []).map((function(e, n) {
														var r = e.proVoList || [];
														return 2 === a.topicOrderType && (r = j.a.cloneDeep(r).sort((function() {
																return Math.random() - .5
															}))),
															e.proVoList = r.map((function(r) {
																r._orderNo = t.listData.length + 1;
																var o = r.proSubVos || [];
																2 === a.topicOrderType && (o = j.a.cloneDeep(o).sort((function() {
																		return Math.random() - .5
																	}))),
																	9 === r.proTypeCode && (r.cont = r.cont ? O["b"].richTextReplaceNr(r.cont) : ""),
																	r.proSubVos = o.map((function(t, e) {
																		t.cont = t.cont ? O["b"].richTextReplaceNr(t.cont) : "",
																			9 === r.proTypeCode && (t._orderNo = e + 1);
																		var n = t.proOptionsVos || [];
																		return 2 === a.opsOrderType && (n = j.a.cloneDeep(n).sort((function() {
																				return Math.random() - .5
																			}))),
																			t.proOptionsVos = n.map((function(t) {
																				return t.cont = t.cont ? O["b"].richTextReplaceNr(t.cont) : "",
																					t
																			})),
																			t
																	})),
																	r.proTypeName = e.proTypeName || "";
																var i = j.a.cloneDeep(r),
																	c = [];
																return (s.problemMasterAnswerList || []).forEach((function(e) {
																		r.proMainId === e.proMasterId && (e.problemBranchAnswerList || []).forEach((function(
																			e) {
																			if (9 !== r.proTypeCode) {
																				if (r.proSubVos[0].id === e.proBranchId) {
																					var n = [];
																					if (7 === r.proTypeCode || 8 === r.proTypeCode) {
																						var a = e.lineMap || {};
																						for (var s in a)
																							a[s] && n.push({
																								leftId: s,
																								rightId: a[s].split(",")
																							});
																						t.answerObj[e.proBranchId] = {
																							nbtx: r.proTypeCode,
																							tmid: e.proBranchId,
																							tgid: r.proMainId,
																							answer: a
																						}
																					} else {
																						var o;
																						n = e.choiceList || [],
																							5 === r.proTypeCode || 6 === r.proTypeCode ? (o = {},
																								n.forEach((function(t, e) {
																									o[e + 1] = t
																								}))) : o = n,
																							t.answerObj[e.proBranchId] = {
																								nbtx: r.proTypeCode,
																								tmid: e.proBranchId,
																								tgid: r.proMainId,
																								answer: o
																							}
																					}
																					i["answer"] = n,
																						r["answer"] = n
																				}
																			} else
																				r.proSubVos.forEach((function(n) {
																					if (e.proBranchId === n.id) {
																						var a = [];
																						if (7 === n.proTypeCode || 8 === n.proTypeCode) {
																							var s = e.lineMap || {};
																							for (var o in s)
																								s[o] && a.push({
																									leftId: o,
																									rightId: s[o].split(",")
																								});
																							t.answerObj[e.proBranchId] = {
																								nbtx: n.proTypeCode,
																								tmid: e.proBranchId,
																								tgid: r.proMainId,
																								answer: s
																							}
																						} else {
																							var i;
																							a = e.choiceList || [],
																								5 === n.proTypeCode || 6 === n.proTypeCode ? (i = {},
																									a.forEach((function(t, e) {
																										i[e + 1] = t
																									}))) : i = a,
																								t.answerObj[e.proBranchId] = {
																									nbtx: n.proTypeCode,
																									tmid: e.proBranchId,
																									tgid: r.proMainId,
																									answer: i
																								}
																						}
																						var l = {
																							childId: n.id,
																							childAnswer: a
																						};
																						a.length && c.push(l)
																					}
																				})),
																				i["answer"] = c,
																				r["answer"] = c
																		}))
																	})),
																	i.qsIndex = n,
																	t.listData.push(i),
																	r
															})),
															e
													})),
													a.proGroupVoList = j.a.cloneDeep(o),
													t.qsdata = j.a.cloneDeep(a),
													t.showAnswerSheet = !0,
													t.currentObj = t.listData[t.currentIndex],
													t.isLoading = !1,
													t.$nextTick((function() {
														var e = 0,
															n = a.proGroupVoList.map((function(n) {
																return n.proVoList.map((function(n) {
																		return n.isCurrent = t.currentObj["id"] === n["id"],
																			n.answer && n.answer.length && e++,
																			n
																	})),
																	n
															}));
														t.qsdata.proGroupVoList = j.a.cloneDeep(n),
															t.progressValue = e ? parseInt(e / t.listData.length * 100) : 0
													}));
											case 26:
											case "end":
												return e.stop()
										}
								}), e)
							})))()
						},
						setAnswerObj: function(t) {
							var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
							console.log("答案设置 setAnswerObj item = ", t);
							var n = 0,
								a = this.qsdata.proGroupVoList.map((function(e) {
									return e.proVoList.map((function(e) {
											return e.proSubVos.forEach((function(n) {
													if (t.tmid === n.id) {
														var a = [];
														if (Array.isArray(t.answer))
															a = t.answer;
														else
															for (var s in t.answer)
																7 === e.nbtx || 8 === e.nbtx ? t.answer[s] && a.push({
																	leftId: s,
																	rightId: t.answer[s].split(",")
																}) : t.answer[s] && a.push(t.answer[s]);
														e.answer = a
													}
												})),
												e.answer && e.answer.length && n++,
												e
										})),
										e
								}));
							this.qsdata.proGroupVoList = j.a.cloneDeep(a),
								this.progressValue = n ? parseInt(n / this.listData.length * 100) : 0,
								this.answerObj[t.tmid] = t,
								e && this.submitExam("0")
						},
						exportAnswer: function() {
							return new Promise((function(t, n) {
								document.createElement("a");
								var a = localStorage.getItem("answerJsonObj"),
									s = {
										key: Object(O["c"])(P()(new Date).format("YYYY-MM-DD HH:mm:ss")),
										json: a
									};
								try {
									Object(O["d"])(Object(O["c"])(JSON.stringify(s)), Date.now() + ".json"),
										t(1)
								} catch (r) {
									n(e)
								}
							}))
						},
						submitExam: function() {
							var t = arguments,
								e = this;
							return Object(c["a"])(regeneratorRuntime.mark((function n() {
								var a, s, r, o;
								return regeneratorRuntime.wrap((function(n) {
									while (1)
										switch (n.prev = n.next) {
											case 0:
												if (a = t.length > 0 && void 0 !== t[0] ? t[0] : "0",
													"1" !== a) {
													n.next = 8;
													break
												}
												s = e.progressValue < 100 ? "当前答题未完成" : "已全部答完",
													r = e.progressValue < 100 ? "继续答题" : "取消",
													o = e.progressValue < 100 ? "warning" : "success",
													e.$alert(s + ", 确认交卷?", "提示", {
														confirmButtonText: "确认交卷",
														cancelButtonText: r,
														showCancelButton: !0,
														customClass: "submitMsgBox",
														type: o,
														modal: !0
													}).then(Object(c["a"])(regeneratorRuntime.mark((function t() {
														return regeneratorRuntime.wrap((function(t) {
															while (1)
																switch (t.prev = t.next) {
																	case 0:
																		return e.isLoading = !0,
																			t.next = 3,
																			e.submitFun(a);
																	case 3:
																		e.isLoading = !1;
																	case 4:
																	case "end":
																		return t.stop()
																}
														}), t)
													})))),
													n.next = 11;
												break;
											case 8:
												return n.next = 10,
													e.submitFun(a);
											case 10:
												e.isLoading = !1;
											case 11:
											case "end":
												return n.stop()
										}
								}), n)
							})))()
						},
						submitFun: function() {
							var t = arguments,
								e = this;
							return Object(c["a"])(regeneratorRuntime.mark((function n() {
								var a, s, r, c, l, u, p, d, f, m, h, g, b, w, v, x, C, j;
								return regeneratorRuntime.wrap((function(n) {
									while (1)
										switch (n.prev = n.next) {
											case 0:
												for (l in a = t.length > 0 && void 0 !== t[0] ? t[0] : "0",
													console.log("交卷逻辑 submitFun ==", e.answerObj),
													s = [],
													r = [],
													c = [],
													e.answerObj) {
													if (u = void 0,
														p = [],
														Array.isArray(e.answerObj[l].answer))
														e.answerObj[l].answer.length && (u = e.answerObj[l].answer);
													else {
														for (d in e.answerObj[l].answer)
															p.push(e.answerObj[l].answer[d]);
														p.filter((function(t) {
																return t
															})).length && (u = e.answerObj[l].answer),
															5 !== e.answerObj[l].nbtx && 6 !== e.answerObj[l].nbtx || u && (u = Object.values(u))
													}
													7 === e.answerObj[l].nbtx || 8 === e.answerObj[l].nbtx ? u && (r.includes(e.answerObj[l].tgid) ?
														c.push(e.answerObj[l].tgid) : r.push(e.answerObj[l].tgid),
														s.push({
															proMasterId: e.answerObj[l].tgid,
															problemBranchAnswerList: [{
																proBranchId: e.answerObj[l].tmid,
																lineMap: u
															}]
														})) : u && (r.includes(e.answerObj[l].tgid) ? c.push(e.answerObj[l].tgid) : r.push(e.answerObj[
															l].tgid),
														s.push({
															proMasterId: e.answerObj[l].tgid,
															problemBranchAnswerList: [{
																proBranchId: e.answerObj[l].tmid,
																choiceList: u
															}]
														}))
												}
												for (g in f = [],
													m = [],
													s.forEach((function(t) {
														c.includes(t.proMasterId) ? f.push(t) : m.push(t)
													})),
													h = {},
													f.forEach((function(t) {
														h[t.proMasterId] ? h[t.proMasterId] = [].concat(Object(i["a"])(t.problemBranchAnswerList),
															Object(i["a"])(h[t.proMasterId])) : h[t.proMasterId] = t.problemBranchAnswerList
													})),
													h)
													m.push({
														proMasterId: g,
														problemBranchAnswerList: h[g]
													});
												return b = P()(new Date).format("YYYY-MM-DD HH:mm:ss"),
													w = {
														answerId: e.infoData.examAnswer.id,
														now: b,
														submitType: "1" === a || "2" === a ? 2 : 1,
														problemMasterAnswerList: m
													},
													localStorage.setItem("answerJsonObj", JSON.stringify({
														dtkId: e.dtkId,
														jsonObj: w
													})),
													v = {
														key: Object(O["c"])(b),
														json: JSON.stringify(w)
													},
																console.error(Object(O["c"])),
													console.error(v.key,b),
													x = 1,
													"1" !== a && "2" !== a || (x = 2),
													n.next = 20,
													e.submitAnswer(v, x)
													
											case 20:
												return C = n.sent,
													"1" === a && "success" === C.status ? (console.log("===========>", a, C.status),
														e.$alert("已交卷成功，待半小时后可登录考生端页面查看成绩，此成绩并非为最终成绩，待学校完成违纪核验工作后，以最终发布成绩为准。", "考试结束", {
															confirmButtonText: "返回登录",
															cancelButtonText: "导出答卷",
															type: "success",
															center: !0,
															showCancelButton: !1,
															showClose: !1,
															closeOnPressEscape: !1,
															closeOnClickModal: !1,
															closeOnHashChange: !1,
															beforeClose: function(t, n, a) {
																"confirm" === t && (Object(F["b"])(!1),
																		e.$router.push({
																			path: "/"
																		})),
																	"cancel" === t && e.exportAnswer().then((function(t) {})),
																	setTimeout((function() {
																		a(),
																			Object(F["b"])(!1),
																			e.$router.push({
																				path: "/"
																			})
																	}), 6e4),
																	console.log(t)
															}
														})) : "2" === a && "success" === C.status ? (console.log("倒计时结束并提交成功"),
														e.$alert("已交卷成功，待半小时后可登录考生端页面查看成绩，此成绩并非为最终成绩，待学校完成违纪核验工作后，以最终发布成绩为准。", "考试结束", {
															confirmButtonText: "返回登录",
															cancelButtonText: "导出答卷",
															type: "success",
															center: !0,
															showClose: !1,
															showCancelButton: !1,
															closeOnPressEscape: !1,
															closeOnClickModal: !1,
															closeOnHashChange: !1,
															beforeClose: function(t, n, a) {
																"confirm" === t && (Object(F["b"])(!1),
																		e.$router.push({
																			path: "/"
																		})),
																	"cancel" === t && e.exportAnswer().then((function(t) {})),
																	setTimeout((function() {
																		a(),
																			Object(F["b"])(!1),
																			e.$router.push({
																				path: "/"
																			})
																	}), 6e4)
															}
														})) : "2" === a && 901 == C.code ? e.$alert(
														"已交卷成功，待半小时后可登录考生端页面查看成绩，此成绩并非为最终成绩，待学校完成违纪核验工作后，以最终发布成绩为准。", "考试结束", {
															confirmButtonText: "返回登录",
															type: "success",
															center: !0,
															showCancelButton: !1,
															showClose: !1,
															closeOnPressEscape: !1,
															closeOnClickModal: !1,
															closeOnHashChange: !1,
															beforeClose: function(t, n, a) {
																"confirm" === t && (Object(F["b"])(!1),
																		e.$router.push({
																			path: "/"
																		})),
																	setTimeout((function() {
																		a(),
																			Object(F["b"])(!1),
																			e.$router.push({
																				path: "/"
																			})
																	}), 6e4)
															}
														}) : ("1" === a && (console.log("服务端正常返回状态，交卷错误"),
															e.$alert(C.msg, "交卷", (j = {
																	confirmButtonText: "导出答卷",
																	showCancelButton: !1,
																	type: "error",
																	center: !0,
																	showClose: !1,
																	closeOnPressEscape: !1
																},
																Object(o["a"])(j, "showCancelButton", !0),
																Object(o["a"])(j, "closeOnHashChange", !1),
																Object(o["a"])(j, "beforeClose", (function(t, n, a) {
																	"confirm" === t && e.exportAnswer().then((function(t) {
																			O["b"].showMessage("导出成功！")
																		})),
																		"cancel" === t && a()
																})),
																j))),
														"2" === a && e.$alert("<p>请导出答卷！答卷将保存至桌面 <strong>(扩展名为 .json)</strong>，请联系监考老师做好备份 </p> ",
															"交卷失败", {
																confirmButtonText: "导出答卷",
																showCancelButton: !0,
																cancelButtonText: "重新交卷",
																type: "error",
																center: !0,
																showClose: !1,
																closeOnPressEscape: !1,
																closeOnClickModal: !1,
																dangerouslyUseHTMLString: !0,
																beforeClose: function(t, n, a) {
																	"confirm" === t ? e.exportAnswer().then((function(t) {})) : (a(),
																		e.submitFun("1"))
																}
															})),
													n.abrupt("return", C);
											case 23:
											case "end":
												return n.stop()
										}
								}), n)
							})))()
						},
						submitAnswer: function(t) {
							var e = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
								a = this;
							return new Promise((function(s, r) {
								Object(I["a"])({
									url: "/g/examination/answer/submitAnswer",
									method: "post",
									data: S.a.stringify(t)
								}).then((function(t) {
									a.stopIntervalWifiStatus(),
										s(t)
								})).catch((function(t) {
									if (console.log("error123===>", t),
										console.log(t),
										2 === n) {
										e.$alert("<p>请导出答卷！答卷将保存至桌面 <strong>(扩展名为 .json)</strong>，请联系监考老师做好备份 </p> ", "交卷失败", {
											confirmButtonText: "导出答卷",
											showCancelButton: !0,
											cancelButtonText: "重新交卷",
											type: "error",
											center: !0,
											showClose: !1,
											closeOnPressEscape: !1,
											closeOnClickModal: !1,
											dangerouslyUseHTMLString: !0,
											beforeClose: function() {
												var t = Object(c["a"])(regeneratorRuntime.mark((function t(n, a, s) {
													return regeneratorRuntime.wrap((function(t) {
														while (1)
															switch (t.prev = t.next) {
																case 0:
																	"confirm" === n ? (console.log("instance===>", a),
																		e.exportAnswer().then((function(t) {}))) : (s(),
																		e.submitFun("1"));
																case 1:
																case "end":
																	return t.stop()
															}
													}), t)
												})));

												function n(e, n, a) {
													return t.apply(this, arguments)
												}
												return n
											}()
										}).catch((function(t) {
											console.log(t)
										}))
									}
									a.intervalWifiStatus || a.startIntervalWifiStatus(),
										r(t)
								}))
							}))
						},
						findDataToBeTested: function(t) {
							var e = this;
							return new Promise((function(n, a) {
								Object(I["a"])({
									url: "/g/examination/answer/findDataToBeTested",
									method: "post",
									data: S.a.stringify(t)
								}).then((function(t) {
									e.stopIntervalWifiStatus(),
										n(t)
								})).catch((function(t) {
									console.log(e.intervalWifiStatus),
										e.intervalWifiStatus || e.startIntervalWifiStatus(2),
										a(t)
								}))
							}))
						},
						submitNext: function() {
							var t = this;
							if (this.currentIndex === this.listData.length - 1)
								return this.$message("最后一道题了"),
									!1;
							this.currentIndex++,
								this.currentObj = this.listData[this.currentIndex];
							var e = this.qsdata.proGroupVoList.map((function(e) {
								return e.proVoList.map((function(e) {
										return e.isCurrent = t.currentObj["id"] === e["id"],
											e
									})),
									e
							}));
							this.qsdata.proGroupVoList = j.a.cloneDeep(e)
						},
						submitPrev: function() {
							var t = this;
							if (0 === this.currentIndex)
								return this.$message("第一道题了"),
									!1;
							this.currentIndex--,
								this.currentObj = this.listData[this.currentIndex];
							var e = this.qsdata.proGroupVoList.map((function(e) {
								return e.proVoList.map((function(e) {
										return e.isCurrent = t.currentObj["id"] === e["id"],
											e
									})),
									e
							}));
							this.qsdata.proGroupVoList = j.a.cloneDeep(e)
						},
						setCurrentObj: function(t) {
							var e = this;
							this.currentIndex = t._orderNo - 1,
								this.currentObj = t;
							var n = this.qsdata.proGroupVoList.map((function(t) {
								return t.proVoList.map((function(t) {
										return t.isCurrent = e.currentObj["id"] === t.id,
											t
									})),
									t
							}));
							this.qsdata.proGroupVoList = j.a.cloneDeep(n)
						},
						timeOut: function() {
							var t = this;
							return Object(c["a"])(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									while (1)
										switch (e.prev = e.next) {
											case 0:
												return console.log("time out"),
													e.next = 3,
													t.submitFun("2");
											case 3:
												t.$alert("已交卷成功，待半小时后可登录考生端页面查看成绩，此成绩并非为最终成绩，待学校完成违纪核验工作后，以最终发布成绩为准。", "考试结束", {
														confirmButtonText: "返回登录",
														cancelButtonText: "导出答卷",
														type: "success",
														center: !0,
														showCancelButton: !1,
														showClose: !1,
														closeOnPressEscape: !1,
														closeOnClickModal: !1,
														closeOnHashChange: !1,
														beforeClose: function(e, n, a) {
															"confirm" === e && (Object(F["b"])(!1),
																	t.$router.push({
																		path: "/"
																	})),
																"cancel" === e && t.exportAnswer().then((function(t) {})),
																console.log(e)
														}
													}),
													setTimeout((function() {
														$["MessageBox"].close(),
															Object(F["b"])(!1),
															t.$router.push({
																path: "/"
															})
													}), 6e4);
											case 5:
											case "end":
												return e.stop()
										}
								}), e)
							})))()
						},
						timeToSec: function(t) {
							var e = t.split(":")[0],
								n = t.split(":")[1],
								a = t.split(":")[2],
								s = Number(3600 * e) + Number(60 * n) + Number(a);
							return 1e3 * s
						},
						fBtnEvt: function(t) {
							switch (console.log("fBtnEvt evt ==", t),
								console.log("step", this.step),
								t.method) {
								case "fInit":
									t.data && (this.infoData = t.data,
										this.imgUrl = O["b"].fileBaseUrl + "/" + this.infoData.student.imgPath);
									break;
								case "noticeStep":
									break;
								case "notice":
									this.step = 2;
									var e = t.data ? JSON.parse(t.data || "{}") : {};
									localStorage.setItem("daObj", JSON.stringify(e)),
										this.isStep = !0,
										this.init();
									break;
								case "fStartExam":
									this.step = 3;
									break;
								case "startExam":
									this.step = 2;
									break;
								default:
									break
							}
						},
						handleClose: function() {
							this.dialogVisible = !1
						},
						getLocation: function() {
							var t = this;
							this.$nextTick(Object(c["a"])(regeneratorRuntime.mark((function n() {
								var a;
								return regeneratorRuntime.wrap((function(n) {
									while (1)
										switch (n.prev = n.next) {
											case 0:
												try {
													a = new BMap.Geolocation,
														a.getCurrentPosition((function(e) {
															e && e.point && (t.lat = e.point.lat || "",
																t.lng = e.point.lng || "")
														}))
												} catch (e) {
													console.log("获取经纬度失败 =", e)
												}
											case 1:
											case "end":
												return n.stop()
										}
								}), n)
							}))))
						},
						dataURLtoFile: function(t, e) {
							var n = t.split(","),
								a = n[0].match(/:(.*?);/)[1],
								s = atob(n[1]),
								r = s.length,
								o = new Uint8Array(r);
							while (r--)
								o[r] = s.charCodeAt(r);
							return new File([o], e, {
								type: a
							})
						},
						plusZoom: function() {
							this.zoomScale = this.zoomScale + 5;
							var t = this.zoomScale - 20;
							this.$message({
								message: t + "%",
								duration: 1e3,
								iconClass: "el-icon-zoom-in",
								customClass: "message-tips"
							})
						},
						minusZoom: function() {
							this.zoomScale = this.zoomScale - 5;
							var t = this.zoomScale - 20;
							this.$message({
								message: t + "%",
								duration: 1e3,
								iconClass: "el-icon-zoom-out",
								customClass: "message-tips"
							})
						}
					},
					watch: {
						step: function(t, e) {
							localStorage.setItem("startExamStep", t)
						},
						$route: function(t, e) {
							"/onlineExaminations/startExam" === t.path ? this.$router.replace(this.fullPath) : this.step = 1
						}
					},
					beforeUpdate: function() {
						localStorage.setItem("pagination", this.currentIndex),
							localStorage.setItem("dtkId", this.dtkid),
							localStorage.setItem("startExamStep", this.step)
					},
					beforeDestroy: function() {
						localStorage.setItem("pagination", "0"),
							localStorage.setItem("dtkId", ""),
							localStorage.setItem("startExamStep", "1"),
							localStorage.setItem("daObj", null),
							localStorage.removeItem("takePicture"),
							Object(q["clearInterval"])(this.timer),
							Object(q["clearInterval"])(this.timer2)
					}
				},
				U = W,
				J = (a("b996"),
					a("2877")),
				Q = Object(J["a"])(U, s, r, !1, null, "358fe2ae", null);
			n["default"] = Q.exports
		},
		b996: function(t, e, n) {
			"use strict";
			n("bac27")
		},
		bac27: function(t, e, n) {}
	}
]);
