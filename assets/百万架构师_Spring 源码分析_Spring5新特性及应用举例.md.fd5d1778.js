import{_ as a,o as e,h as r,Q as t}from"./chunks/framework.da611722.js";const b=JSON.parse('{"title":"Spring5新特性及应用举例 | JavaGuide","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://javaguide.net/百万架构师/Spring 源码分析/Spring5新特性及应用举例.html"}],["meta",{"name":"keywords","content":"Spring5新特性及应用举例 , JavaGuide , JavaGuide官网, Java面试指南, Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],["meta",{"name":"og:url","content":"https://JavaGuide.net"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"og:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"og:title","content":"Spring5新特性及应用举例 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"og:description","content":"Spring5新特性及应用举例 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:site","content":"https://javaguide.net"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:creator","content":"nogeek.cn"}],["meta",{"name":"twitter:title","content":"Spring5新特性及应用举例 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"twitter:description","content":"Spring5新特性及应用举例 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"sogou_site_verification","content":"fcAkazTXFd"}],["meta",{"name":"baidu-site-verification","content":"codeva-MXEPYsXKGk"}],["meta",{"name":"msvalidate.01","content":"9F2D57CFC59E8031212A166878638B15"}]]},"headers":[],"relativePath":"百万架构师/Spring 源码分析/Spring5新特性及应用举例.md","filePath":"百万架构师/Spring 源码分析/Spring5新特性及应用举例.md","lastUpdated":1741277271000}'),n={name:"百万架构师/Spring 源码分析/Spring5新特性及应用举例.md"},i=t('<h2 id="背景-不是为了推荐大家去使用spring5" tabindex="-1">背景：不是为了推荐大家去使用Spring5 <a class="header-anchor" href="#背景-不是为了推荐大家去使用spring5" aria-label="Permalink to &quot;背景：不是为了推荐大家去使用Spring5&quot;">​</a></h2><p>​ 文档很少、资料难找</p><p>​ 没有实战实践，包括老师自己没有用过</p><h3 id="目的" tabindex="-1">目的： <a class="header-anchor" href="#目的" aria-label="Permalink to &quot;目的：&quot;">​</a></h3><p>1、带大家来看看眼界</p><p>2、了解一下未来的一个发展趋势</p><p>鸡肋</p><h2 id="推荐-springboot-spring生态链-框架的框架" tabindex="-1">推荐：SpringBoot，Spring生态链（框架的框架） <a class="header-anchor" href="#推荐-springboot-spring生态链-框架的框架" aria-label="Permalink to &quot;推荐：SpringBoot，Spring生态链（框架的框架）&quot;">​</a></h2><h3 id="spring5新特性" tabindex="-1">Spring5新特性： <a class="header-anchor" href="#spring5新特性" aria-label="Permalink to &quot;Spring5新特性：&quot;">​</a></h3><h3 id="依赖jdk-8-和java-ee7-以上版本" tabindex="-1">依赖JDK 8+和Java EE7+以上版本 <a class="header-anchor" href="#依赖jdk-8-和java-ee7-以上版本" aria-label="Permalink to &quot;依赖JDK 8+和Java EE7+以上版本&quot;">​</a></h3><p>支持使用注解进行编程</p><h3 id="新增函数式编程" tabindex="-1">新增函数式编程 <a class="header-anchor" href="#新增函数式编程" aria-label="Permalink to &quot;新增函数式编程&quot;">​</a></h3><h3 id="支持使用rest断点执行反应式编程" tabindex="-1">支持使用REST断点执行反应式编程 <a class="header-anchor" href="#支持使用rest断点执行反应式编程" aria-label="Permalink to &quot;支持使用REST断点执行反应式编程&quot;">​</a></h3><h3 id="支持http-2-0" tabindex="-1">支持HTTP 2.0 <a class="header-anchor" href="#支持http-2-0" aria-label="Permalink to &quot;支持HTTP 2.0&quot;">​</a></h3><h3 id="新增kotlin和spring-webflux" tabindex="-1">新增Kotlin和Spring WebFlux <a class="header-anchor" href="#新增kotlin和spring-webflux" aria-label="Permalink to &quot;新增Kotlin和Spring WebFlux&quot;">​</a></h3><p>可使用Lambda表达式注册Bean</p><p>Spring WebMVC支持最新的API</p><h3 id="使用junit5执行条件和并发测试" tabindex="-1">使用JUnit5执行条件和并发测试 <a class="header-anchor" href="#使用junit5执行条件和并发测试" aria-label="Permalink to &quot;使用JUnit5执行条件和并发测试&quot;">​</a></h3><p>使用Spring WebFlux执行集成测试</p><p>核心容器优化</p><h3 id="spring5-对-webflux-的支持" tabindex="-1">Spring5 对 <strong>WebFlux</strong> 的支持 <a class="header-anchor" href="#spring5-对-webflux-的支持" aria-label="Permalink to &quot;Spring5 对 **WebFlux** 的支持&quot;">​</a></h3><p><strong>Sevlet2.x</strong> 单实例多线程的阻塞式IO （BIO）</p><p><strong>Sevlet3.x</strong> 单实例多线程异步非阻塞式IO （AIO异步非阻塞、NIO 同步非阻塞）</p><p><strong>WebFlux</strong> 是在 <strong>Servlet3.x</strong> 的基础之上应运而生</p><h3 id="特点" tabindex="-1">特点： <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点：&quot;">​</a></h3><p>1、基于<strong>Servlet3.x</strong> 实现异步非阻塞的HTTP响应</p><p>2、<strong>API</strong> 完美支持 <strong>Rest</strong> 风格</p><p>3、支持函数式编程</p><p>4、<strong>Mono</strong> 是表示返回单个对象、Flux表示返回集合</p><h4 id="结论" tabindex="-1">结论： <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论：&quot;">​</a></h4><p>1、为了让大家开一下眼界，了解未来的发展趋势</p><p>2、如果要应用在项目之中，建议大家直接用Spring Boot</p><h2 id="spring5集成测试" tabindex="-1">Spring5集成测试 <a class="header-anchor" href="#spring5集成测试" aria-label="Permalink to &quot;Spring5集成测试&quot;">​</a></h2><h3 id="junit集成" tabindex="-1">JUnit集成 <a class="header-anchor" href="#junit集成" aria-label="Permalink to &quot;JUnit集成&quot;">​</a></h3><p>1、</p><ul><li><code>@BeforeEach</code> 相当于 JUnit 4 <code>@Before</code></li><li><code>@BeforeAll</code> 相当于 JUnit 4 <code>@BeforeClass</code></li><li><code>@AfterEach</code> 相当于 JUnit 4 <code>@After</code></li><li><code>@AfterAll</code> 相当于 JUnit 4 <code>@AfterClass</code></li><li><code>@Test</code> 不在<code>org.unit</code>这个包下，转到了<code>org.junit.jupiter.api</code>下</li></ul><p>2、支持从外部注入参数</p><h2 id="问题收集" tabindex="-1">问题收集： <a class="header-anchor" href="#问题收集" aria-label="Permalink to &quot;问题收集：&quot;">​</a></h2><h3 id="问-刚才那个点重点说了多个线程-而完全没有强调非阻塞" tabindex="-1">问：刚才那个点重点说了多个线程，而完全没有强调非阻塞， <a class="header-anchor" href="#问-刚才那个点重点说了多个线程-而完全没有强调非阻塞" aria-label="Permalink to &quot;问：刚才那个点重点说了多个线程，而完全没有强调非阻塞，&quot;">​</a></h3><p>所有才有疑问</p><p>如果讲过的所有点都必须百度过才懂，课又有多大意义</p><p>答：只是为了告诉大家有这个特性存在，多线程提升性能（高吞吐量的情况才能体现）</p><p>从框架内部解决了一些问题。</p><h3 id="问-spring和spring-boot的关系" tabindex="-1">问：Spring和spring Boot的关系 <a class="header-anchor" href="#问-spring和spring-boot的关系" aria-label="Permalink to &quot;问：Spring和spring Boot的关系&quot;">​</a></h3><p>答：<strong>Spring Boot</strong> 是一个框架的框架，只要是在Spring生态之内，它真的能够实现零配置启动集成的工具，框架（自己内部就实现了Web容器）</p><p><a href="http://start.spring.io/" target="_blank" rel="noreferrer">http://start.spring.io/</a></p><h3 id="问-老师说推荐用-spring-boot-不用webflux。" tabindex="-1">问：老师说推荐用 Spring Boot，不用WebFlux。 <a class="header-anchor" href="#问-老师说推荐用-spring-boot-不用webflux。" aria-label="Permalink to &quot;问：老师说推荐用 Spring Boot，不用WebFlux。&quot;">​</a></h3><p>就是说Spring Boot Rest接口性能比Spring的好？</p><p>答：不是这个意思，没有性能上的区别，只有方便与不方便的区别</p><h3 id="问-spring-boot-有什么优势呢-面试会问的" tabindex="-1">问：Spring Boot 有什么优势呢 面试会问的 <a class="header-anchor" href="#问-spring-boot-有什么优势呢-面试会问的" aria-label="Permalink to &quot;问：Spring Boot 有什么优势呢 面试会问的&quot;">​</a></h3><p>答：以上可以回答此问题</p><h3 id="问-spring-boot-不是方便创建工程吗-和spring-webflux关系大吗" tabindex="-1">问：Spring Boot 不是方便创建工程吗？和Spring WebFlux关系大吗？ <a class="header-anchor" href="#问-spring-boot-不是方便创建工程吗-和spring-webflux关系大吗" aria-label="Permalink to &quot;问：Spring Boot 不是方便创建工程吗？和Spring WebFlux关系大吗？&quot;">​</a></h3><p>答：以上可以回答此问题</p><h3 id="问-怎么从官方文档之类的知道spring需要哪些jar包" tabindex="-1">问：怎么从官方文档之类的知道Spring需要哪些jar包？ <a class="header-anchor" href="#问-怎么从官方文档之类的知道spring需要哪些jar包" aria-label="Permalink to &quot;问：怎么从官方文档之类的知道Spring需要哪些jar包？&quot;">​</a></h3><p>答：spring.io 官网上，啥都有。例如：<a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html" target="_blank" rel="noreferrer">https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html</a></p><h3 id="问-aop和aspect的关系" tabindex="-1">问：AOP和Aspect的关系 <a class="header-anchor" href="#问-aop和aspect的关系" aria-label="Permalink to &quot;问：AOP和Aspect的关系&quot;">​</a></h3><p>答：asm是一个Java字节码操纵框架，它能被用来动态生成类或者增强既有类的功能。</p><p>asm --&gt; cglib(替代JDK Proxy) --&gt; aspect(作为SpringAOP底层支持) --&gt; AOP</p><h5 id="问-messageconverter-和-mono-的作用相同-有没有区别和优劣" tabindex="-1">问：<code>MessageConverter</code> 和 <code>Mono</code> 的作用相同，有没有区别和优劣 <a class="header-anchor" href="#问-messageconverter-和-mono-的作用相同-有没有区别和优劣" aria-label="Permalink to &quot;问：`MessageConverter` 和 `Mono` 的作用相同，有没有区别和优劣&quot;">​</a></h5><p>答：无所谓优势与劣势之说，无非就是应用环境不一样，在发展中进步</p><ul><li><code>MessageConverter</code> 旧版本的实现方式，手动</li><li><code>Mono</code> 是新版的实现方式，使用更加方便，自动</li></ul><p>都是针对：<code>Response</code> 输出而进行处理 <code>resp.getWrite(&quot;&quot;)</code></p><p>最底层实际都是对字符串的输出格式进行处理而已</p><h3 id="问-spring-bean-ioc-容器为什么使用concurrenthashmap来存储-是由哪些原因导致" tabindex="-1">问：Spring Bean IOC 容器为什么使用ConcurrentHashMap来存储，是由哪些原因导致 <a class="header-anchor" href="#问-spring-bean-ioc-容器为什么使用concurrenthashmap来存储-是由哪些原因导致" aria-label="Permalink to &quot;问：Spring Bean IOC 容器为什么使用ConcurrentHashMap来存储，是由哪些原因导致&quot;">​</a></h3><p>答：<strong>Spring</strong> 的 <strong>IOC</strong> 容器包括很多种，最终都是会调用到 <strong><code>DefaultListableBeanFactory</code></strong> (只实现了部分功能)</p><ul><li>XML</li><li>Annotation</li><li>Proxy</li><li>Web</li></ul><p>最终的容器会归总成一个，是不是有可能重复操作？（删、改、覆盖，取不会影响）</p><h3 id="问-spring事务-在service方法中必须要抛异常-事务才会回滚吗" tabindex="-1">问：Spring事务，在Service方法中必须要抛异常，事务才会回滚吗？ <a class="header-anchor" href="#问-spring事务-在service方法中必须要抛异常-事务才会回滚吗" aria-label="Permalink to &quot;问：Spring事务，在Service方法中必须要抛异常，事务才会回滚吗？&quot;">​</a></h3><p>答：当然，必须要抛异常，没有异常就认为没有出问题，也就不涉及数据回滚。</p><h3 id="问-能再详细说下spring-web-flux的异步么-多线程就等于异步" tabindex="-1">问：能再详细说下Spring Web Flux的异步么？多线程就等于异步 <a class="header-anchor" href="#问-能再详细说下spring-web-flux的异步么-多线程就等于异步" aria-label="Permalink to &quot;问：能再详细说下Spring Web Flux的异步么？多线程就等于异步&quot;">​</a></h3><p>答：是异步的。但是多线程不一定就是异步，但是在Java异步必须由多线程来实现。</p>',71),o=[i];function p(s,l,d,h,c,g){return e(),r("div",null,o)}const m=a(n,[["render",p]]);export{b as __pageData,m as default};
