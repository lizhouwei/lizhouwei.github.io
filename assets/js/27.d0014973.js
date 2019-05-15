(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{198:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"统一建模语言uml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统一建模语言uml","aria-hidden":"true"}},[t._v("#")]),t._v(" 统一建模语言UML")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("统一建模语言（Unified Modeling Language，缩写 UML）是非专利的第三代建模和规约语言。UML是一种开放的方法，用于说明、可视化、构建和编写一个正在开发的、面向对象的、软件密集系统的制品的开放方法。UML展现了一系列最佳工程实践，这些最佳实践在对大规模，复杂系统进行建模方面，特别是在软件架构层次已经被验证有效。")]),t._v(" "),s("p",[t._v("这个语言由葛来迪·布区，伊瓦尔·雅各布森与詹姆士·兰宝于1994年至1995年间，在Rational Software公司中开发，于1996年，又进一步发展。UML集成了Booch，OMT和面向对象软件工程的概念，将这些方法融合为单一的，通用的，并且可以广泛使用的建模语言。UML打算成为可以对并发和分布式系统的标准建模语言。")]),t._v(" "),s("p",[t._v("UML并不是一个工业标准，但在Object Management Group的主持和资助下，UML正在逐渐成为工业标准。OMG之前曾经呼吁业界向其提供有关面向对象的理论及实现的方法，以便制作一个严谨的软件建模语言（Software Modeling Language）。有很多业界的领袖亦真诚地回应OMG，帮助它建立一个业界标准。")]),t._v(" "),s("h2",{attrs:{id:"模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 模型")]),t._v(" "),s("p",[t._v("在UML系统开发中有三个主要的模型：")]),t._v(" "),s("ul",[s("li",[t._v("功能模型：从用户的角度展示系统的功能，包括用例图。")]),t._v(" "),s("li",[t._v("对象模型：采用对象，属性，操作，关联等概念展示系统的结构和基础，包括类别图、对象图。")]),t._v(" "),s("li",[t._v("动态模型：展现系统的内部行为。包括序列图，活动图，状态图。")])]),t._v(" "),s("p",[t._v("区分UML模型和UML图是非常重要的，UML图，包括用例图、协作图、活动图、序列图、部署图、构件图、类图、状态图，是模型中信息的图形表达方式，但是UML模型独立于UML图存在。UML的当前版本只提供了模型信息的交换，而没有提供图信息的交换。"),s("br"),t._v("\nUML使用一套与Java语言或其他面向对象语言等价物，同时也是本体论等价物的图形标记。"),s("br"),t._v("\nUML并不是一个方法学，也不要求使用一个方法学，但是UML对于Rational统一过程来说是必不可少的。")]),t._v(" "),s("h2",{attrs:{id:"类图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类图","aria-hidden":"true"}},[t._v("#")]),t._v(" 类图")]),t._v(" "),s("h3",{attrs:{id:"类图简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类图简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 类图简介")]),t._v(" "),s("p",[t._v("类图是静态视图的图形表达方式，表示声明的静态模型元素，如类、类型和其他内容图。")]),t._v(" "),s("h3",{attrs:{id:"类图的基本描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类图的基本描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 类图的基本描述")]),t._v(" "),s("p",[t._v("类图的基本模型元素如图：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("类的名称")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("属性")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("操作")])])])]),t._v(" "),s("p",[t._v("也就是说，一个类的图分别由类名、属性和操作（方法）组成。")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("类名定义：")]),s("br"),t._v("\n类名通常是一个名词，最好能够反映类所代表的问题的域中的概念。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("属性名的格式为：")]),s("br"),t._v("\n可见属性名：类型名=初值 （属性名和类型名是必须要有的，可以不写初值）"),s("br"),t._v("\n对于属性可见性：+ （加号）表示public , -(减号)表示private, #表示protected,没有符号则表示是默认的可见性。例如")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("User")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("+userCode:String")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("-age:int=20")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("-name:String")])])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("操作的格式为：")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("User")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("+userCode:String"),s("br"),s("u",[t._v("+userName:String")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("u",[t._v("+run(speed:double,durbleTime:double):void")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("-name:String")])])])]),t._v(" "),s("h3",{attrs:{id:"抽象类和接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 抽象类和接口")]),t._v(" "),s("p",[t._v("抽象类的表示是类名倾斜，抽象操作的表示是整个操作都倾斜，如图")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("AbstractClass")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("-name:String")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("+abstractMethod(a:int,b:String):String")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("+otherMethod():void")])])])]),t._v(" "),s("p",[t._v("接口的定义")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("<< interface >>"),s("br"),t._v("userInterface")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("-name:String")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("+abstractMethod(a:int,b:String):String")])])])])]),t._v(" "),s("h3",{attrs:{id:"类之间的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类之间的关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 类之间的关系")]),t._v(" "),s("p",[t._v("类图除了描述类本身之外，另外一个重点就是描述类与类之间的关系。类图描述的关系包括泛化（也叫通用化或者继承）、实现、依赖、关联、聚合、组合。如图")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("关系")]),t._v(" "),s("th",[t._v("功能")]),t._v(" "),s("th",[t._v("表达形式")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("泛化（继承）")]),t._v(" "),s("td",[t._v("概括描述和具体种类的关系，适用于继承")]),t._v(" "),s("td",[t._v("用一条带空心三角箭头的实线表示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("实现")]),t._v(" "),s("td",[t._v("抽象说明和具体实现间的关系，如实现接口")]),t._v(" "),s("td",[t._v("用一条带空心三角箭头的虚线表示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("依赖")]),t._v(" "),s("td",[t._v("两个模型元素之间的关系")]),t._v(" "),s("td",[t._v("由类A指向类B的带箭头虚线表示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("关联")]),t._v(" "),s("td",[t._v("两个类之间语义级别的一种强依赖关系")]),t._v(" "),s("td",[t._v("由关联类A指向被关联类B的带箭头实线表示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("聚合")]),t._v(" "),s("td",[t._v("体现的是整体与部分的关系，即has-a的关系")]),t._v(" "),s("td",[t._v("由空心菱形加实线箭头表示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("组合")]),t._v(" "),s("td",[t._v("体现的是一种contains-a的关系，这种关系比聚合更强")]),t._v(" "),s("td",[t._v("由实心菱形加实线箭头表示")])])])]),t._v(" "),s("p",[t._v("一、继承关系"),s("br"),t._v("\n继承指的是一个类（称为子类、子接口）继承另外的一个类（称为父类、父接口）的功能，并可以增加它自己的新功能的能力。在Java中继承关系通过关键字extends明确标识，在设计时一般没有争议性。在UML类图设计中，继承用一条带空心三角箭头的实线表示，从子类指向父类，或者子接口指向父接口。")]),t._v(" "),s("img",{attrs:{src:"http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkDZ1KiAdHrLM0S8ou75BpKe2I0000",alt:"uml diagram"}}),t._v(" "),s("p",[t._v("二、实现关系"),s("br"),t._v("\n实现指的是一个class类实现interface接口（可以是多个）的功能，实现是类与接口之间最常见的关系。在Java中此类关系通过关键字implements明确标识，在设计时一般没有争议性。在UML类图设计中，实现用一条带空心三角箭头的虚线表示，从类指向实现的接口。")]),t._v(" "),s("img",{attrs:{src:"http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuKhEIImkLd06aOP6N9bv9Qb5QOd9gL0HGouehM1JewS7L-QGcfS2r0m0",alt:"uml diagram"}}),t._v(" "),s("p",[t._v("三、依赖关系"),s("br"),t._v("\n简单的理解，依赖就是一个类A使用到了另一个类B，而这种使用关系是具有偶然性的、临时性的、非常弱的，但是类B的变化会影响到类A。比如某人要过河，需要借用一条船，此时人与船之间的关系就是依赖。表现在代码层面，为类B作为参数被类A在某个method方法中使用。在UML类图设计中，依赖关系用由类A指向类B的带箭头虚线表示。")]),t._v(" "),s("img",{attrs:{src:"http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkDZHLqDEpKu2mpRWSKlDIW780",alt:"uml diagram"}}),t._v(" "),s("p",[t._v("四、关联关系"),s("br"),t._v("\n关联体现的是两个类之间语义级别的一种强依赖关系，比如我和我的朋友，这种关系比依赖更强、不存在依赖关系的偶然性、关系也不是临时性的，一般是长期性的，而且双方的关系一般是平等的。关联可以是单向、双向的。表现在代码层面，为被关联类B以类的属性形式出现在关联类A中，也可能是关联类A引用了一个类型为被关联类B的全局变量。在UML类图设计中，关联关系用由关联类A指向被关联类B的带箭头实线表示，在关联的两端可以标注关联双方的角色和多重性标记。")]),t._v(" "),s("img",{attrs:{src:"http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkDZHMqDMrKu2mJRWSKlDIW780",alt:"uml diagram"}}),t._v(" "),s("p",[t._v("五、聚合关系"),s("br"),t._v("\n聚合是关联关系的一种特例，它体现的是整体与部分的关系，即has-a的关系。此时整体与部分之间是可分离的，它们可以具有各自的生命周期，部分可以属于多个整体对象，也可以为多个整体对象共享。比如计算机与CPU、公司与员工的关系等，比如一个航母编队包括海空母舰、驱护舰艇、舰载飞机及核动力攻击潜艇等。表现在代码层面，和关联关系是一致的，只能从语义级别来区分。在UML类图设计中，聚合关系以空心菱形加实线箭头表示。")]),t._v(" "),s("img",{attrs:{src:"http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkDZ1LoDVLLO2mpRWSKlDIW780",alt:"uml diagram"}}),t._v(" "),s("p",[t._v("六、组合关系"),s("br"),t._v("\n组合也是关联关系的一种特例，它体现的是一种contains-a的关系，这种关系比聚合更强，也称为强聚合。它同样体现整体与部分间的关系，但此时整体与部分是不可分的，整体的生命周期结束也就意味着部分的生命周期结束，比如人和人的大脑。表现在代码层面，和关联关系是一致的，只能从语义级别来区分。在UML类图设计中，组合关系以实心菱形加实线箭头表示。")]),t._v(" "),s("img",{attrs:{src:"http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkDZ1MqDBLLO2mJRWSKlDIW780",alt:"uml diagram"}}),t._v(" "),s("p",[t._v("组合和聚合都属于关联，所以它们之间难免有相似之处，区别举例来说明："),s("br"),t._v("\n程老师的《大话》里举大那个大雁的例子很贴切 在此我就借用一下 大雁喜欢热闹害怕孤独 所以它们一直过着群居的生活 这样就有了雁群 每一只大雁都有自己的雁群 每个雁群都有好多大雁 大雁与雁群的这种关系就可以称之为聚合 另外每只大雁都有两只翅膀 大雁与雁翅的关系就叫做组合 有此可见 聚合的关系明显没有组合紧密 大雁不会因为它们的群主将雁群解散而无法生存 而雁翅就无法脱离大雁而单独生存——组合关系的类具有相同的生命周期。")]),t._v(" "),s("p",[t._v("总结"),s("br"),t._v("\n对于继承、实现这两种关系没多少疑问，它们体现的是一种类和类、或者类与接口间的纵向关系。其他的四种关系体现的是类和类、或者类与接口间的引用、横向关系，是比较难区分的，有很多事物间的关系要想准确定位是很难的。前面也提到，这四种关系都是语义级别的，所以从代码层面并不能完全区分各种关系，但总的来说，后几种关系所表现的强弱程度依次为：组合>聚合>关联>依赖。")]),t._v(" "),s("h2",{attrs:{id:"顺序图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顺序图","aria-hidden":"true"}},[t._v("#")]),t._v(" 顺序图")]),t._v(" "),s("p",[t._v("顺序图是按照时间的先后顺序来描述消息是如何在对象间发送和接收的，顺序图横坐标表示对象，纵坐标表示时间，时间沿竖线向下延伸。顺序图又称为序列图或时序图。")]),t._v(" "),s("p",[t._v("顺序图中的对象用一个带有纵向虚线的矩形块来表示，矩形块中写有对象或类的名字，纵向的虚线表示对象的“生命线”。对象之间的交互用对象间的水平消息线来描述，消息线的箭头表示消息的类型，消息的先后顺序就是对象交互的先后顺序。")]),t._v(" "),s("p",[t._v("顺序图主要用来表示用例中行为的顺序，可以通过它来进行一个场景说明，或者是对某一个复杂业务功能或是流程执行先后的说明，也就是说，顺序图通常可以用来描述系统某次调用的运行顺序。")]),t._v(" "),s("h3",{attrs:{id:"顺序图的基本表达"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顺序图的基本表达","aria-hidden":"true"}},[t._v("#")]),t._v(" 顺序图的基本表达")]),t._v(" "),s("p",[t._v("消息的表达方式如图：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("消息类型")]),t._v(" "),s("th",[t._v("表达方式")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("顺序消息")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("异步消息")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("调用")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"举例说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 举例说明")]),t._v(" "),s("p",[t._v("假如有A类和B类，A类会调用B类的方法，然后写个客户端来调用A类，现在使用顺序图来描述客户端的调用顺序。"),s("br"),t._v("\n假设B类示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("A类的示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"求和的结果是"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Client 的示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",[s("li",[t._v("UML2.0的顺序图示例")])]),t._v(" "),s("img",{attrs:{src:"http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIe0qfd9cGM9UIKApZcPUQabN5p9HQc99QaAZbmG0GLTEmL7AmL3FKChXQSTiv_ktlLqtRmd-xgv5D0L65af9Eeb6cfeMfNbPwPm9IQNP9P1J8APwSJb25Bj15QDnK1aMQ1fnQMvshP9XXgPcbQPUIK80vsuK5GQMoaawIKPQIWzszZqT5BFyrajptTFVZPlphCPwvLqW6PeSd4vfEQb0FqB0000",alt:"uml diagram"}})])}],!1,null,null,null);a.default=e.exports}}]);