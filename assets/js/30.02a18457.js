(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{192:function(t,e,r){"use strict";r.r(e);var i=r(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("模式设计需遵循面向对象设计五个基本原则（SOLID）。这些原则是：单一职责原则、开闭原则、接口隔离原则、里氏替换原则和依赖倒置原则。这些原则被一起应用时可以使一个软件系统更易被维护和扩展。这些原则被典型的应用在测试驱动开发上，并且是敏捷开发以及自适应软件开发等指导思想的重要组成部分。")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("单一职责原则（SRP：Single responsibility principle）规定一个类应该只有一个发生变化的原因。该原则由罗伯特·C·马丁（Robert C. Martin）于《敏捷软件开发：原则、模式和实践》一书中给出的。马丁表示此原则是基于汤姆·狄马克(Tom DeMarco)和Meilir Page-Jones的著作中的内聚性原则发展出的。一个类应该只有一个职责。每一个职责都是变化的一个轴线，如果一个类有一个以上的职责，这些职责就耦合在了一起。这会导致脆弱的设计。当一个职责发生变化时，可能会影响其它的职责。另外，多个职责耦合在一起，会影响复用性。例如：要实现逻辑和界面的分离。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[r("router-link",{attrs:{to:"/framework/designmode/principle/example.html#单一职责原则"}},[t._v("代码示例")])],1),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("开放封闭原则（OCP，Open Closed Principle）是所有面向对象原则的核心。软件设计本身所追求的目标就是封装变化、降低耦合，而开放封闭原则正是对这一目标的最直接体现。其他的设计原则，很多时候是为实现这一目标服务的，例如以Liskov替换原则实现最佳的、正确的继承层次，就能保证不会违反开放封闭原则。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[r("router-link",{attrs:{to:"/framework/designmode/principle/example.html#开放-关闭原则"}},[t._v("代码示例")])],1),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("这一点上，表明了OO的继承与日常生活中的继承的本质区别。举一个例子：生物学的分类体系中把企鹅归属为鸟类。我们模仿这个体系，设计出这样的类和关系。")]),t._v(" "),r("p",[t._v("类“鸟”中有个方法fly，企鹅自然也继承了这个方法，可是企鹅不能飞阿，于是，我们在企鹅的类中覆盖了fly方法，告诉方法的调用者：企鹅是不会飞的。这完全符合常理。但是，这违反了LSP，企鹅是鸟的子类，可是企鹅却不能飞！需要注意的是，此处的“鸟”已经不再是生物学中的鸟了，它是软件中的一个类、一个抽象。")]),t._v(" "),r("p",[t._v("有人会说，企鹅不能飞很正常啊，而且这样编写代码也能正常编译，只要在使用这个类的客户代码中加一句判断就行了。但是，这就是问题所在！首先，客户代码和“企鹅”的代码很有可能不是同时设计的，在当今软件外包一层又一层的开发模式下，你甚至根本不知道两个模块的原产地是哪里，也就谈不上去修改客户代码了。客户程序很可能是遗留系统的一部分，很可能已经不再维护，如果因为设计出这么一个“企鹅”而导致必须修改客户代码，谁应该承担这部分责任呢？（大概是上帝吧，谁叫他让“企鹅”不能飞的。^_^）“修改客户代码”直接违反了OCP，这就是OCP的重要性。违反LSP将使既有的设计不能封闭！")]),t._v(" "),t._m(14),t._v(" "),r("p",[t._v("于是，工程师们开始关注如何确保对象的行为。1988年，B. Meyer提出了Design by Contract（契约式设计）理论。DbC从形式化方法中借鉴了一套确保对象行为和自身状态的方法，其基本概念很简单：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("p",[r("router-link",{attrs:{to:"/framework/designmode/principle/example.html#里氏替换原则"}},[t._v("代码示例")])],1),t._v(" "),t._m(19),t._v(" "),r("p",[t._v("依赖倒置原则（Dependence Inversion Principle）是程序要依赖于抽象接口，不要依赖于具体实现。简单的说就是要求对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合。")]),t._v(" "),r("p",[t._v("面向过程的开发，上层调用下层，上层依赖于下层，当下层剧烈变动时上层也要跟着变动，这就会导致模块的复用性降低而且大大提高了开发的成本。")]),t._v(" "),r("p",[t._v("面向对象的开发很好的解决了这个问题，一般情况下抽象的变化概率很小，让用户程序依赖于抽象，实现的细节也依赖于抽象。即使实现细节不断变动，只要抽象不变，客户程序就不需要变化。这大大降低了客户程序与实现细节的耦合度。")]),t._v(" "),r("p",[t._v("很多人觉得，层次化调用时，应该是高层调用“底层所拥有的接口”，这是一种典型的误解，事实上，一般高层模块包含对业务功能的处理和业务策略选择，应该被重用，是高层模块去影响底层的具体实现。")]),t._v(" "),r("p",[t._v("因此，这个底层的接口应该是由高层提出的，然后由底层实现的，也就是说底层接口的所有权在高层模块，因此是一种所有权的倒置。")]),t._v(" "),r("p",[r("router-link",{attrs:{to:"/framework/designmode/principle/example.html#依赖倒置原则"}},[t._v("代码示例")])],1),t._v(" "),t._m(20),t._v(" "),r("p",[t._v("接口隔离原则（Interface Segregation Principle）是指客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。")]),t._v(" "),r("p",[t._v("这个原则用来处理那些比较庞大的接口，这种接口通常会有较多的操作声明，涉及到很多的职责，客户在使用这样的接口时，通常会有很多他不需要的方法，这些方法对于客户来讲，就是一种接口污染，相当于强迫用户在一大堆“垃圾方法”中去寻找他需要的方法。")]),t._v(" "),r("p",[t._v("因此，这样的接口应该被分离，应该按照不同的客户需要来分离成为针对客户的接口，这样的接口中，只包含客户需要的操作声明，这样既方便了客户使用，也可以避免因误用接口而导致的错误。")]),t._v(" "),r("p",[t._v("分离接口的方式，除了直接进行代码分离之外，还可以使用委托来分离接口，在能够支持多重继承的语言中，还可以采用多重继承的方式进行隔离。")]),t._v(" "),r("p",[r("router-link",{attrs:{to:"/framework/designmode/principle/example.html#接口隔离原则"}},[t._v("代码示例")])],1),t._v(" "),t._m(21),t._v(" "),r("p",[t._v("迪米特原则（Demeter Principle）又叫最少知识原则（Least Knowledge Principle, LKP）。1987年秋天由美国Northeastern University的Ian Holland提出，被UML的创始者之一Booch等普及。后来，因为在经典著作《 The Pragmatic Programmer》而广为人知。")]),t._v(" "),r("p",[t._v("值得一提的是，虽然Ian Holland对计算机科学的贡献也仅限于这一条法则，其他方面的建树不多，但是，这一法则却不仅仅局限于计算机领域，在其他领域也同样适用。比如，美国人就在航天系统的设计中采用这一法则。")]),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("最少知道原则的另一个表达方式是：只与直接的朋友通信。类之间只要有耦合关系，就叫朋友关系。耦合分为依赖、关联、聚合、组合等。我们称出现为成员变量、方法参数、方法返回值中的类为直接朋友。局部变量、临时变量则不是直接的朋友。我们要求陌生的类不要作为局部变量出现在类中。")]),t._v(" "),t._m(23),t._v(" "),r("p",[t._v("合成复用原则原则（Composite Reuse Principle）是尽量首先使用合成/聚合的方式，而不是使用继承。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"设计模式遵循的设计原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计模式遵循的设计原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 设计模式遵循的设计原则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"单一职责原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 单一职责原则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("原理"),e("br"),this._v("\n如果一个类承担的职责过多，就等于把这些职责耦合在一起了。一个职责的变化可能会削弱或者抑制这个类完成其他职责的能力。这种耦合会导致脆弱的设计，当发生变化时，设计会遭受到意想不到的破坏。而如果想要避免这种现象的发生，就要尽可能的遵守单一职责原则。此原则的核心就是解耦和增强内聚性。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("问题由来"),e("br"),this._v("\n之所以会出现单一职责原则就是因为在软件设计时会出现以下类似场景："),e("br"),this._v("\nT负责两个不同的职责：职责P1，职责P2。当由于职责P1需求发生改变而需要修改类T时，有可能会导致原本运行正常的职责P2功能发生故障。也就是说职责P1和P2被耦合在了一起。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("产生原因"),e("br"),this._v("\n没有任何的程序设计人员不清楚应该写出高内聚低耦合的程序，但是很多耦合常常发生在不经意之间，其原因就是："),e("br"),this._v("\n职责扩散：因为某种原因，某一职责被分化为颗粒度更细的多个职责了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("解决办法"),e("br"),this._v("\n遵守单一职责原则，将不同的职责封装到不同的类或模块中")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"开放-关闭原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开放-关闭原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 开放-关闭原则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("原理"),e("br"),this._v("\n开放封闭的核心思想就是对抽象编程，而不对具体编程，因为抽象相对稳定。让类依赖于固定的抽象，所以对修改就是封闭的；而通过面向对象的继承和对多态机制，可以实现对抽象体的继承，通过覆写其方法来改变固有行为，实现新的扩展方法，所以对于扩展就是开放的。这是实施开放封闭原则的基本思路，同时这种机制是建立在两个基本的设计原则的基础上，这就是Liskov替换原则和合成/聚合复用原则。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("问题由来"),e("br"),this._v("\n“需求总是变化”、“世界上没有一个软件是不变的”，这些言论是对软件需求最经典的表白。从中透射出一个关键的意思就是，对于软件设计者来说，必须在不需要对原有的系统进行修改的情况下，实现灵活的系统扩展。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("解决办法"),e("br"),this._v("\n软件实体应该是可扩展，而不可修改的。也就是说，对扩展是开放的，而对修改是封闭的。"),e("br"),this._v("\n因此，开放封闭原则主要体现在两个方面："),e("br"),this._v("\n对扩展开放，意味着有新的需求或变化时，可以对现有代码进行扩展，以适应新的情况。"),e("br"),this._v("\n对修改封闭，意味着类一旦设计完成，就可以独立完成其工作，而不要对类进行任何修改。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("对于违反这一原则的类，必须进行重构来改善，常用于实现的设计模式主要有Template Method模式和Strategy模式。而封装变化，是实现这一原则的重要手段，将经常发生变化的状态封装为一个类。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"里氏替换原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 里氏替换原则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("简介"),e("br"),this._v("\n里氏替换原则（Liskov Substitution Principle LSP）是指衍生类必须能够替换掉它们的基类，这很明显是一种多态的使用情况，只有当衍生类可以替换掉基类，软件单位的功能不受到影响时，基类才能真正被复用，而衍生类也能够在基类的基础上增加新的行为。"),e("br"),this._v("\n如此，问题产生了：“我们如何去度量继承关系的质量？”"),e("br"),this._v("\nLiskov于1987年提出了一个关于继承的原则“Inheritance should ensure that any property proved about supertype objects also holds for subtype objects.”——“继承必须确保超类所拥有的性质在子类中仍然成立。”也就是说，当一个子类的实例应该能够替换任何其超类的实例时，它们之间才具有is-A关系。"),e("br"),this._v("\n该原则称为Liskov Substitution Principle——里氏替换原则。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("形象理解"),e("br"),this._v("\n我们来研究一下LSP的实质。学习OO的时候，我们知道，一个对象是一组状态和一系列行为的组合体。状态是对象的内在特性，行为是对象的外在特性。LSP所表述的就是在同一个继承体系中的对象应该有共同的行为特征。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("修正后的设计如下："),e("br"),this._v("\n但是，这就是LSP的全部了么？书中给了一个经典的例子，这又是一个不符合常理的例子：正方形不是一个长方形。这个悖论的详细内容能在网上找到，我就不多废话了。"),e("br"),this._v("\nLSP并没有提供解决这个问题的方案，而只是提出了这么一个问题。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Pre-condition:"),e("br"),this._v("\n每个方法调用之前，该方法应该校验传入参数的正确性，只有正确才能执行该方法，否则认为调用方违反契约，不予执行。这称为前置条件(Pre-condition)。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Post-Condition:"),e("br"),this._v("\n一旦通过前置条件的校验，方法必须执行，并且必须确保执行结果符合契约，这称之为后置条件(Post-condition)。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Invariant:"),e("br"),this._v("\n对象本身有一套对自身状态进行校验的检查条件，以确保该对象的本质不发生改变，这称之为不变式(Invariant)。"),e("br"),this._v("\n以上是单个对象的约束条件。为了满足LSP，当存在继承关系时，子类中方法的前置条件必须与超类中被覆盖的方法的前置条件相同或者更宽松；而子类中方法的后置条件必须与超类中被覆盖的方法的后置条件相同或者更为严格")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一些OO语言中的特性能够说明这一问题："),e("br"),this._v("\n继承并且覆盖超类方法的时候，子类中的方法的可见性必须等于或者大于超类中的方法的可见性，子类中的方法所抛出的受检异常只能是超类中对应方法所抛出的受检异常的子类。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"依赖倒置原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒置原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 依赖倒置原则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"接口隔离原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 接口隔离原则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"迪米特原则（最少知道原则）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迪米特原则（最少知道原则）","aria-hidden":"true"}},[this._v("#")]),this._v(" 迪米特原则（最少知道原则）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("迪米特法则可以简单说成：talk only to your immediate friends。对于OOD(面向对象设计)来说，又被解释为下面几种方式："),e("br"),this._v("\n一个软件实体应当尽可能少的与其他实体发生相互作用。"),e("br"),this._v("\n每一个软件单位对其他的单位都只有最少的知识，而且局限于那些与本单位密切相关的软件单位。"),e("br"),this._v("\n就是说：一个类对自己依赖的类知道的越少越好。也就是说无论被依赖的类多么复杂，都应该将逻辑封装在方法的内部，通过public方法提供给外部。这样当被依赖的类变化时，才能最小的影响该类。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"合成复用原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合成复用原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 合成复用原则")])}],!1,null,null,null);e.default=s.exports}}]);