export type LearningStage = {
  order: number;
  id: string;
  title: string;
  subtitle: string;
  lessonId: string;
  chapter: string;
  depth: '入门' | '理解' | '应用' | '易错' | '表达';
  objective: string;
  checkpoint: string;
  nextHint: string;
};

export const javaBasicLearningStages: LearningStage[] = [
  {
    order: 1,
    id: 'know-java',
    title: '先认识 Java 是什么',
    subtitle: '别急着背语法，先知道 Java 解决什么问题。',
    lessonId: 'concepts',
    chapter: '基础概念与常识',
    depth: '入门',
    objective: '能用自己的话说出 Java 的核心特点，以及它为什么常用于后端和企业级系统。',
    checkpoint: '我能不用背列表，讲出 3 个 Java 特点和对应的开发好处。',
    nextHint: '能说明 Java 为什么适合长期维护的系统后，再进入运行模型。',
  },
  {
    order: 2,
    id: 'runtime-model',
    title: '再理解程序怎么跑起来',
    subtitle: '源码不是直接运行的，中间有编译、字节码和 JVM。',
    lessonId: 'jvm',
    chapter: 'JVM / JDK / JRE',
    depth: '理解',
    objective: '能讲清楚 JDK、JRE、JVM 的包含关系，以及 Java 跨平台靠的是什么。',
    checkpoint: '我能画出 JDK → JRE → JVM，并解释 .java → .class → JVM 的过程。',
    nextHint: '能讲清楚程序运行链路后，再开始看具体语法。',
  },
  {
    order: 3,
    id: 'syntax-actions',
    title: '学习最小语法动作',
    subtitle: '先掌握注释、命名、运算和流程跳转这些最基础动作。',
    lessonId: 'syntax',
    chapter: '基本语法',
    depth: '入门',
    objective: '能读懂一小段 Java 代码，并解释自增自减、移位、continue、break、return 的执行流程。',
    checkpoint: '我能逐行推导 i++ / ++i 的结果，并能说出三种跳转语句分别跳到哪里。',
    nextHint: '能读懂代码执行顺序后，再学习数据如何表示。',
  },
  {
    order: 4,
    id: 'data-types',
    title: '理解数据怎么表示',
    subtitle: '变量里装的不是“随便的值”，而是有类型、范围和精度的值。',
    lessonId: 'types',
    chapter: '基本数据类型',
    depth: '应用',
    objective: '能说出 8 种基本类型，并理解整数、浮点数、金额计算和大整数的边界。',
    checkpoint: '我能解释为什么金额不用 double，以及什么时候考虑 BigDecimal / BigInteger。',
    nextHint: '能理解基本类型后，再看为什么还需要包装类型。',
  },
  {
    order: 5,
    id: 'wrapper-pitfalls',
    title: '进入包装类型和常见坑',
    subtitle: '这里开始有面试高频坑：装箱拆箱、缓存、== 和 equals。',
    lessonId: 'wrapper',
    chapter: '包装类型与装箱拆箱',
    depth: '易错',
    objective: '能区分基本类型和包装类型，并能解释 Integer 缓存、自动装箱拆箱和比较方式。',
    checkpoint: '我能判断 Integer 127 / 128 的 == 输出，并说明业务比较为什么用 equals。',
    nextHint: '能解释值和对象的区别后，再看变量在不同位置的生命周期。',
  },
  {
    order: 6,
    id: 'variables-scope',
    title: '理解数据放在哪里、活多久',
    subtitle: '变量不是只有名字，还涉及作用域、生命周期、默认值和共享方式。',
    lessonId: 'variables',
    chapter: '变量与常量',
    depth: '理解',
    objective: '能从声明位置、修饰符、生命周期和默认值解释成员变量、局部变量和静态变量。',
    checkpoint: '我能解释为什么成员变量有默认值，而局部变量必须先赋值。',
    nextHint: '能讲清楚变量后，再看方法如何组织行为。',
  },
  {
    order: 7,
    id: 'methods-expression',
    title: '最后用方法组织行为并训练表达',
    subtitle: '方法把逻辑封装起来，重载、重写、静态方法是面试表达重点。',
    lessonId: 'methods',
    chapter: '方法',
    depth: '表达',
    objective: '能解释方法返回值、静态方法、实例方法、重载、重写和可变长参数。',
    checkpoint: '我能用“重载看参数，重写看继承”展开讲出完整区别。',
    nextHint: '完成后可以进入综合复述：用 3 分钟讲完整个 Java 基础体系。',
  },
];
