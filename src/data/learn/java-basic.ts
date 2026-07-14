export type LearnLesson = {
  id: string;
  title: string;
  description: string;
  badge: string;
  href: string;
  points: string[];
  missingFromFirstVersion?: string[];
};

export type PracticeQuestion = {
  id: string;
  chapter: string;
  type: 'concept-explain' | 'code-output' | 'compare-explain' | 'scenario-explain';
  title: string;
  question: string;
  code?: string;
  guideSteps: string[];
  checklist: string[];
  referenceAnswer: string;
  commonMistake?: string;
};

export const javaBasicLessons: LearnLesson[] = [
  {
    id: 'concepts',
    title: '基础概念与常识',
    description: 'Java 语言特点、Java SE/EE/ME、Java 与 C++、Oracle JDK 与 OpenJDK。',
    badge: 'Concepts',
    href: '/learn/java/basic#concepts',
    points: ['Java 常见特点：面向对象、跨平台、多线程、自动内存管理、编译与解释并存', 'Java SE 是基础，Java EE 面向企业级服务端开发，Java ME 主要面向嵌入式设备', 'Java 与 C++ 的常见区别：指针、继承、GC、操作符重载'],
    missingFromFirstVersion: ['Java 语言特点', 'Java SE vs Java EE vs Java ME', 'Java 和 C++ 的区别', 'Oracle JDK vs OpenJDK'],
  },
  {
    id: 'jvm',
    title: 'JVM / JDK / JRE',
    description: 'JVM、JRE、JDK、字节码、JIT、AOT、编译与解释并存。',
    badge: 'JVM',
    href: '/learn/java/basic#jvm',
    points: ['JDK 用于开发，JRE 用于运行，JVM 执行字节码', '字节码统一，不同平台有不同 JVM，这是跨平台关键', 'JIT 慢热但峰值性能好，AOT 启动快但对动态特性有限制'],
  },
  {
    id: 'syntax',
    title: '基本语法',
    description: '注释、标识符、关键字、自增自减、移位运算、continue/break/return。',
    badge: 'Syntax',
    href: '/learn/java/basic#syntax',
    points: ['注释有单行、多行、文档注释；好代码应尽量自解释', '标识符是名字，关键字是被 Java 赋予特殊含义的名字', 'i++ 先用后加，++i 先加后用；continue 跳本轮，break 跳循环，return 跳方法'],
    missingFromFirstVersion: ['Java 关键字分类', 'true/false/null 是字面值不是关键字', '移位运算的使用场景和类型限制'],
  },
  {
    id: 'types',
    title: '基本数据类型',
    description: '8 种基本类型、默认值、字节数、取值范围、浮点精度、BigDecimal、BigInteger。',
    badge: 'Types',
    href: '/learn/java/basic#types',
    points: ['一布一字，四整两浮：boolean、char、byte/short/int/long、float/double', 'long 字面量建议加 L，float 字面量需要加 f/F', '金额计算用 BigDecimal，超过 long 的整数用 BigInteger'],
    missingFromFirstVersion: ['基本类型默认值、字节数和取值范围', 'long/float 字面量注意事项', 'BigDecimal equals 与 compareTo 区别', 'BigInteger 溢出场景'],
  },
  {
    id: 'wrapper',
    title: '包装类型与装箱拆箱',
    description: '基本类型和包装类型的用途、存储、默认值、比较方式、缓存机制、装箱拆箱。',
    badge: 'Wrapper',
    href: '/learn/java/basic#wrapper',
    points: ['包装类型是对象，可以用于泛型；基本类型更轻量', '包装类型 == 多数比较地址，业务比较值优先用 equals', '装箱调用 valueOf，拆箱调用 xxxValue；Integer 缓存默认 -128 到 127'],
    missingFromFirstVersion: ['基本类型和包装类型的存储差异', 'Float/Double 没有缓存', 'IntegerCache 可调上限但不建议乱调'],
  },
  {
    id: 'variables',
    title: '变量与常量',
    description: '成员变量、局部变量、静态变量、字符型常量和字符串常量。',
    badge: 'Variables',
    href: '/learn/java/basic#variables',
    points: ['成员变量属于类或对象，局部变量属于方法或代码块', '成员变量有默认值，局部变量必须先赋值再使用', '静态变量被类的所有实例共享；字符常量用单引号，字符串常量用双引号'],
    missingFromFirstVersion: ['成员变量和局部变量的语法、存储、生命周期、默认值完整对比', '为什么成员变量有默认值', '静态变量作用', '字符型常量和字符串常量区别'],
  },
  {
    id: 'methods',
    title: '方法',
    description: '返回值、参数、静态方法、实例方法、重载、重写和可变长参数。',
    badge: 'Methods',
    href: '/learn/java/basic#methods',
    points: ['方法按参数和返回值可分为四类：无参无返回、有参无返回、无参有返回、有参有返回', '静态方法属于类，不能直接访问实例成员；实例方法没有这个限制', '重载看参数，重写看继承；可变参数本质是数组且只能放最后'],
    missingFromFirstVersion: ['方法返回值和四种方法类型', '静态方法为什么不能调用非静态成员', '静态方法和实例方法完整区别', '可变长参数规则和固定参数优先级'],
  },
];

export const javaBasicQuestions: PracticeQuestion[] = [
  {
    id: 'q001',
    chapter: '基础概念与常识',
    type: 'concept-explain',
    title: '用自己的话介绍 Java 的特点',
    question: '不要背列表。请用“我为什么选择 Java/Java 适合做什么”的角度，解释 Java 的几个核心特点。',
    guideSteps: ['先说一句总观点：Java 的核心优势是什么。', '挑 3 个你最能理解的特点，比如跨平台、面向对象、生态成熟、自动内存管理。', '每个特点补一句“这对开发有什么好处”。', '最后用一句话收束：这些特点适合什么场景。'],
    checklist: ['有没有说到跨平台或 JVM', '有没有说到面向对象或生态', '有没有把特点和真实开发好处联系起来', '是否避免机械背 10 条'],
    referenceAnswer: '我理解 Java 的特点不是单纯语法简单，而是它很适合做长期维护的后端系统。它通过 JVM 和字节码实现跨平台，通过面向对象组织复杂业务，通过 GC 降低手动内存管理成本，再加上 Spring 等生态成熟，所以在企业级应用里很常见。',
    commonMistake: '只背“简单、面向对象、跨平台、多线程……”但说不出每一点对开发有什么实际帮助。',
  },
  {
    id: 'q002',
    chapter: 'JVM / JDK / JRE',
    type: 'compare-explain',
    title: 'JDK、JRE、JVM 关系',
    question: '请用包含关系和使用场景解释 JDK、JRE、JVM，而不是只背缩写。',
    guideSteps: ['先画出包含关系：JDK → JRE → JVM。', '说明每一层的作用：开发、运行、执行字节码。', '补一个例子：写代码时需要什么，跑程序时需要什么。', '最后提醒 JDK 9 之后模块化和 jlink 会弱化传统 JRE 概念。'],
    checklist: ['是否说出 JDK 包含 JRE，JRE 包含 JVM', '是否区分开发工具和运行环境', '是否提到 javac 或基础类库', '是否能解释为什么普通用户可能只需要运行环境'],
    referenceAnswer: 'JDK 是开发工具包，面向写代码和编译代码；JRE 是运行环境，面向运行已经编译好的 Java 程序；JVM 是真正加载并执行字节码的虚拟机。所以关系上是 JDK 包含 JRE，JRE 包含 JVM。比如开发者需要 javac，所以装 JDK；只运行程序时主要需要运行环境和类库。',
  },
  {
    id: 'q003',
    chapter: '基本语法',
    type: 'code-output',
    title: '自增自减输出题',
    question: '先不要展开答案，自己按“先用还是先变”的规则推一遍。',
    code: 'int a = 9;\nint b = a++;\nint c = ++a;\nint d = c--;\nint e = --d;',
    guideSteps: ['逐行写出每一步执行后 a、b、c、d、e 的值。', '遇到 a++/c-- 先记录“使用时的值”，再改变量本身。', '遇到 ++a/--d 先改变量本身，再把新值赋出去。', '最后用一句话总结前缀和后缀的区别。'],
    checklist: ['a++ 是否先赋值给 b，再让 a 加 1', '++a 是否先让 a 加 1，再赋值给 c', 'c-- 是否先赋值给 d，再让 c 减 1', '--d 是否先让 d 减 1，再赋值给 e'],
    referenceAnswer: '最终 a = 11，b = 9，c = 10，d = 10，e = 10。我的理解是：符号在后，先把当前值拿去用，再改变变量；符号在前，先改变变量，再拿改变后的值去用。',
    commonMistake: '把 c-- 之后的 d 也跟着变了。d 只是拿到 c 当时的值，后面 c 再减不会影响 d。',
  },
  {
    id: 'q004',
    chapter: '基本语法',
    type: 'concept-explain',
    title: 'continue、break、return',
    question: '请用“跳到哪里去”的方式解释 continue、break、return。',
    guideSteps: ['先分别说三者结束的范围：本轮、循环、方法。', '给一个 for 循环中的例子。', '强调 return 不只是跳出循环，而是结束当前方法。', '最后用一句口语化总结。'],
    checklist: ['continue 是跳过本次循环剩余代码', 'break 是跳出当前循环或 switch', 'return 是结束当前方法', '是否能用代码执行流程解释'],
    referenceAnswer: 'continue 是跳过本轮循环后面的代码，直接进入下一轮；break 是结束当前循环，循环后面的代码继续执行；return 是结束当前方法，方法里后面的代码都不再执行。简单说就是 continue 跳本轮，break 跳循环，return 跳方法。',
  },
  {
    id: 'q005',
    chapter: '基本数据类型',
    type: 'concept-explain',
    title: '8 种基本类型怎么记',
    question: '请用自己的记忆方式说出 8 种基本类型，并解释 long、float 字面量为什么要注意后缀。',
    guideSteps: ['先用口诀说出分类：一布一字，四整两浮。', '展开每一类具体类型。', '解释 long 后面为什么建议加 L。', '解释 float 为什么需要 f/F。'],
    checklist: ['是否完整说出 byte、short、int、long、float、double、char、boolean', '是否区分整数型和浮点型', '是否提到 long 默认可能按 int 解析', '是否提到小数字面量默认是 double，赋给 float 需 f/F'],
    referenceAnswer: '我用“一布一字，四整两浮”来记。boolean 是布尔，char 是字符，byte、short、int、long 是整数，float、double 是浮点数。long 类型的数值后面建议加 L，避免被当成 int 解析；float 后面要加 f 或 F，因为小数字面量默认是 double。',
  },
  {
    id: 'q006',
    chapter: '基本数据类型',
    type: 'scenario-explain',
    title: '金额为什么不用 double',
    question: '假设你在做订单金额计算，为什么不建议直接用 double？应该怎么表达这个问题？',
    guideSteps: ['先说现象：部分十进制小数无法被二进制精确表示。', '再说后果：运算结果可能出现精度误差。', '给出解决方案：金额使用 BigDecimal。', '补一个比较细节：BigDecimal 比较数值相等常用 compareTo。'],
    checklist: ['是否说清楚二进制表示导致精度问题', '是否避免说成 double 一定不能用', '是否提到 BigDecimal', '是否知道 equals 和 compareTo 的差别'],
    referenceAnswer: '订单金额需要精确计算，而 double/float 是二进制浮点数，很多十进制小数不能被精确表示，所以计算时可能出现误差。金额场景一般用 BigDecimal，并且比较数值是否相等时更常用 compareTo，而不是只看 equals，因为 equals 还会受精度位数影响。',
  },
  {
    id: 'q007',
    chapter: '包装类型与装箱拆箱',
    type: 'compare-explain',
    title: '基本类型和包装类型',
    question: '请从用途、默认值、比较方式三个角度解释基本类型和包装类型的区别。',
    guideSteps: ['先说本质区别：基本类型直接表示值，包装类型是对象。', '从泛型/集合场景说明为什么需要包装类型。', '从默认值说明基本类型和包装类型的风险差异。', '从 == 和 equals 说明比较方式。'],
    checklist: ['是否提到包装类型可用于泛型', '是否提到包装类型默认值可为 null', '是否提到 == 对包装类型通常比较地址', '是否建议比较值用 equals'],
    referenceAnswer: '基本类型更轻量，直接表示值；包装类型是对象，所以可以放进泛型和集合里。默认值上，成员变量里的基本类型有默认值，比如 int 是 0，而包装类型默认是 null。比较时，基本类型用 == 比较值；包装类型用 == 可能比较对象地址，所以业务上比较数值更推荐 equals。',
  },
  {
    id: 'q008',
    chapter: '包装类型与装箱拆箱',
    type: 'code-output',
    title: 'Integer 缓存和 ==',
    question: '请先判断输出，再解释为什么。',
    code: 'Integer a = 127;\nInteger b = 127;\nInteger c = 128;\nInteger d = 128;\nSystem.out.println(a == b);\nSystem.out.println(c == d);',
    guideSteps: ['先判断 127 和 128 是否都走缓存。', '解释 Integer.valueOf 的默认缓存范围。', '说明 == 对包装类型比较的是什么。', '最后给出业务建议。'],
    checklist: ['127 是否判断为 true', '128 是否判断为 false', '是否提到默认缓存范围 -128 到 127', '是否建议业务比较使用 equals'],
    referenceAnswer: '第一行输出 true，第二行通常输出 false。因为 Integer 自动装箱会调用 valueOf，默认缓存 -128 到 127，127 会复用缓存对象，而 128 超出默认缓存范围，可能创建不同对象。包装类型用 == 比较的是对象引用，所以业务比较数值应该用 equals。',
  },
  {
    id: 'q009',
    chapter: '变量与常量',
    type: 'compare-explain',
    title: '成员变量和局部变量',
    question: '请从位置、修饰符、存储、生命周期、默认值五个角度说明成员变量和局部变量的区别。',
    guideSteps: ['先定义二者分别在哪里声明。', '说修饰符差异：成员变量可用访问控制/static，局部变量不行。', '说生命周期：成员跟对象或类走，局部跟方法调用走。', '说默认值：成员有安全默认值，局部必须手动赋值。', '最后解释为什么成员变量有默认值。'],
    checklist: ['是否覆盖声明位置', '是否覆盖修饰符限制', '是否覆盖存储和生命周期', '是否覆盖默认值', '是否能解释局部变量为什么必须显式赋值'],
    referenceAnswer: '成员变量定义在类里，属于类或对象；局部变量定义在方法、代码块或参数里。成员变量可以用 public、private、static 等修饰，局部变量不能用访问控制修饰符和 static。生命周期上，成员变量跟对象或类一起存在，局部变量跟方法调用一起产生和消失。默认值上，成员变量有默认值，局部变量必须先赋值，因为编译器能检查局部变量是否在使用前赋值。',
    commonMistake: '只说“成员在堆，局部在栈”。这句话过于粗糙，变量位置还和作用域、static、对象布局有关。',
  },
  {
    id: 'q010',
    chapter: '变量与常量',
    type: 'concept-explain',
    title: '静态变量有什么作用',
    question: '请用“多个对象共享一份数据”的角度解释 static 变量。',
    guideSteps: ['先说 static 变量属于类，不属于某个对象。', '说明创建多个对象时共享同一份静态变量。', '举一个计数器或常量的例子。', '说明常量通常会用 static final。'],
    checklist: ['是否说出属于类', '是否说出所有实例共享', '是否能举例', '是否提到 static final 常量'],
    referenceAnswer: '静态变量是被 static 修饰的变量，它属于类，而不是某一个对象。一个类创建多个实例时，它们共享同一份静态变量，所以适合放全局共享的状态或常量。比如统计创建过多少个对象可以用 static 计数器；固定不变的配置值通常写成 static final 常量。',
  },
  {
    id: 'q011',
    chapter: '变量与常量',
    type: 'compare-explain',
    title: '字符常量和字符串常量',
    question: '请用形式、含义、占用空间三个角度解释 char 常量和 String 常量。',
    guideSteps: ['先说形式：单引号和双引号。', '再说含义：字符值和字符串对象引用。', '说明 char 在 Java 中占 2 个字节。', '最后给一个例子说明 char 可以参与数值运算。'],
    checklist: ['是否区分单引号和双引号', '是否知道 char 是一个字符', '是否知道 String 是对象/引用', '是否提到 char 占 2 字节'],
    referenceAnswer: "字符常量用单引号，比如 'A'，表示一个 char 字符；字符串常量用双引号，比如 \"A\"，表示一个字符串对象的引用。char 在 Java 中占 2 个字节，也可以看作一个字符对应的数值参与运算；String 可能包含 0 个或多个字符，占用空间取决于内容和编码。",
  },
  {
    id: 'q012',
    chapter: '方法',
    type: 'concept-explain',
    title: '方法返回值和四种方法类型',
    question: '请解释什么是方法返回值，并按“有没有参数、有没有返回值”说出四种方法类型。',
    guideSteps: ['先用自己的话解释返回值的作用。', '按参数和返回值两个维度拆分。', '分别举出四种方法类型。', '补充 void 方法里 return 可以用来提前结束方法。'],
    checklist: ['是否解释返回值是方法执行后的结果', '是否说出无参无返回', '是否说出有参无返回', '是否说出无参有返回和有参有返回', '是否知道 void 方法也可以 return 结束执行'],
    referenceAnswer: '方法返回值就是方法执行后交给调用方的结果，调用方可以继续拿这个结果参与其他操作。按参数和返回值可以分四类：无参数无返回值、有参数无返回值、无参数有返回值、有参数有返回值。void 方法没有返回结果，但可以用 return 提前结束当前方法。',
  },
  {
    id: 'q013',
    chapter: '方法',
    type: 'compare-explain',
    title: '静态方法和实例方法',
    question: '请解释为什么静态方法不能直接调用非静态成员，并顺带比较静态方法和实例方法。',
    guideSteps: ['先说静态方法属于类，实例成员属于对象。', '说明静态方法在类加载后就可用，对象可能还没创建。', '比较调用方式：类名调用和对象调用。', '说明访问限制：静态只能直接访问静态，实例方法没有这个限制。'],
    checklist: ['是否说出静态属于类', '是否说出非静态属于实例对象', '是否解释对象未创建时非静态成员不存在', '是否说明调用方式和访问限制'],
    referenceAnswer: '静态方法属于类，类加载后就可以通过类名调用；非静态成员属于具体对象，只有创建对象后才存在。所以静态方法不能直接访问非静态成员，因为此时可能根本没有对象。实例方法是通过对象调用的，它既能访问实例成员，也能访问静态成员。',
  },
  {
    id: 'q014',
    chapter: '方法',
    type: 'compare-explain',
    title: '重载和重写',
    question: '请按“发生位置、参数、返回值、访问修饰符、绑定时期”解释重载和重写。',
    guideSteps: ['先用一句口诀区分：重载看参数，重写看继承。', '说明重载通常在同一类中，方法名相同但参数列表不同。', '说明重写发生在父子类之间，方法签名基本相同。', '补充重写规则：两同两小一大。', '最后说明重载是编译期，重写是运行期。'],
    checklist: ['是否说出重载参数必须不同', '是否说出重写发生在继承关系中', '是否提到重写访问权限不能更小', '是否提到构造方法不能重写', '是否区分编译期绑定和运行期绑定'],
    referenceAnswer: '重载看参数，重写看继承。重载通常发生在同一个类里，方法名相同，但参数类型、个数或顺序不同，返回值和访问修饰符不是决定因素。重写发生在父子类之间，方法名和参数列表相同，子类重新实现父类方法，访问权限不能比父类更小，异常和返回类型也有约束。重载偏编译期确定，重写偏运行期多态。',
  },
  {
    id: 'q015',
    chapter: '方法',
    type: 'scenario-explain',
    title: '可变长参数',
    question: '请解释 Java 可变长参数的规则，并说明和重载同时存在时优先匹配谁。',
    guideSteps: ['先说语法：String... args。', '说明它可以接收 0 个或多个参数。', '说明可变参数只能放在参数列表最后。', '说明本质上会被编译成数组。', '最后说明重载时固定参数匹配优先级更高。'],
    checklist: ['是否写出 ... 语法', '是否知道可以接收不定数量参数', '是否知道只能放最后', '是否知道本质是数组', '是否知道固定参数优先'],
    referenceAnswer: '可变长参数是 Java 5 开始支持的语法，比如 String... args，表示调用方法时可以传入 0 个或多个 String。它只能放在参数列表最后，因为后面的参数数量是不确定的。编译后它本质上会变成数组。和固定参数重载同时存在时，固定参数方法匹配度更高，会优先匹配固定参数。',
  },
];
