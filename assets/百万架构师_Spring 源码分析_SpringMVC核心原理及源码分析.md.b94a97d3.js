import{_ as s,o as n,h as a,Q as e}from"./chunks/framework.da611722.js";const p="/assets/SpringMVC请求过程.b5b07c71.png",l="/assets/SpringMVC基本原理.c191108f.png",v=JSON.parse('{"title":"SpringMVC核心原理及源码分析 | JavaGuide","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://javaguide.net/百万架构师/Spring 源码分析/SpringMVC核心原理及源码分析.html"}],["meta",{"name":"keywords","content":"SpringMVC核心原理及源码分析 , JavaGuide , JavaGuide官网, Java面试指南, Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],["meta",{"name":"og:url","content":"https://JavaGuide.net"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"og:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"og:title","content":"SpringMVC核心原理及源码分析 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"og:description","content":"SpringMVC核心原理及源码分析 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:site","content":"https://javaguide.net"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:creator","content":"nogeek.cn"}],["meta",{"name":"twitter:title","content":"SpringMVC核心原理及源码分析 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"twitter:description","content":"SpringMVC核心原理及源码分析 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"sogou_site_verification","content":"fcAkazTXFd"}],["meta",{"name":"baidu-site-verification","content":"codeva-MXEPYsXKGk"}],["meta",{"name":"msvalidate.01","content":"9F2D57CFC59E8031212A166878638B15"}]]},"headers":[],"relativePath":"百万架构师/Spring 源码分析/SpringMVC核心原理及源码分析.md","filePath":"百万架构师/Spring 源码分析/SpringMVC核心原理及源码分析.md","lastUpdated":1741277271000}'),o={name:"百万架构师/Spring 源码分析/SpringMVC核心原理及源码分析.md"},t=e(`<h3 id="spring-mvc-一种-web-开发的设计模式" tabindex="-1">Spring MVC 一种 Web 开发的设计模式 <a class="header-anchor" href="#spring-mvc-一种-web-开发的设计模式" aria-label="Permalink to &quot;Spring MVC 一种 Web 开发的设计模式&quot;">​</a></h3><p>实现了不同业务层面的解耦，隔离。</p><p><a href="http://www.dairan.com?id=?&amp;type=" target="_blank" rel="noreferrer">http://www.dairan.com?id=?&amp;type=</a></p><h5 id="model" tabindex="-1">Model： <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model：&quot;">​</a></h5><p>​ 将传输数据封装成一个完成的载体。把很多参数传成一个Model。就是一种设计模式，你也可以不封装。</p><h5 id="view" tabindex="-1">View： <a class="header-anchor" href="#view" aria-label="Permalink to &quot;View：&quot;">​</a></h5><p>​ 视图，用来展示或者输出的模块（HTML、JSP、JSON、String、Swing、XML.....）</p><h5 id="control" tabindex="-1">Control： <a class="header-anchor" href="#control" aria-label="Permalink to &quot;Control：&quot;">​</a></h5><p>​ 控制交互的一个中间组件，由它来根据用户请求分发不同任务从而得到不同的结果。</p><blockquote><p>DTO,POJO 就是一个 Model</p></blockquote><p>MVC ：基于项目开发的设计模式。用来解决用户和后台交互的问题。</p><h4 id="j2ee标准" tabindex="-1">J2EE标准 <a class="header-anchor" href="#j2ee标准" aria-label="Permalink to &quot;J2EE标准&quot;">​</a></h4><p>JSP 页面是一个万能的组件，可以写 HTML、写 JS、写 JAVA 逻辑、写 SQL 语句</p><p>MVC 框架应运而生: Struts1、Struts2、Webwork、Spring MVC</p><p>SpringMVC: 只是 MVC 设计模式的应用典范。给 MVC 的实现制定了一套标准</p><p>M：支持将 URL 参数自动封装成一个 Object 或者 Map</p><p>V：自己只有一个默认的 template、支持扩展、自定义 View，能够自定义解析</p><p>C：做到把限制放宽了，任何一个类，都有可能是一个 Controller</p><blockquote><p>Struts 对用户的要求太高了，Spring MVC 对应用户的要求几乎没有。写几个 annotation 就好了</p></blockquote><ul><li><code>DispatcherServlet</code><ul><li><code>FrameworkServlet</code><ul><li><code>HttpServletBean</code></li><li><code>ApplicationContextAware</code> - <code>setContextInitializers</code></li></ul></li><li><code>FrameworkServlet</code> - <code>refresh()</code> - <code>onRefresh()</code></li></ul></li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onRefresh</span><span style="color:#E1E4E8;">(ApplicationContext context) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// Strategy 策略</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initStrategies</span><span style="color:#E1E4E8;">(context);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initStrategies</span><span style="color:#E1E4E8;">(ApplicationContext context) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 有九个策略</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 针对于每个用户请求，都会经过一些处理的策略之后，最终才能会有结果输出。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 每种策略可以自定义敢于，但是最终的结果都是一致</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// ModelAndView</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// ==========这里就是传输中的 Spring MVC 中的九大组件=========</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initMultipartResolver</span><span style="color:#E1E4E8;">(context); </span><span style="color:#6A737D;">// 文件上传解析，如果请求类型是 multipart 将通过 MultipartREsolver</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initLocaleResolver</span><span style="color:#E1E4E8;">(context);</span><span style="color:#6A737D;">// 本地化解析</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initThemeResolver</span><span style="color:#E1E4E8;">(context);</span><span style="color:#6A737D;">// 主题解析</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">/** 我们自己会实现  */</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initHandlerMappings</span><span style="color:#E1E4E8;">(context);</span><span style="color:#6A737D;">// 通过 HandlerMapping，将请求映射到处理器</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">/** 我们自己会实现*/</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initHandlerAdapters</span><span style="color:#E1E4E8;">(context);</span><span style="color:#6A737D;">// 通过 HandlerAdapter 继续进行多类型的参数的动态匹配</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initHandlerExceptionResolvers</span><span style="color:#E1E4E8;">(context);</span><span style="color:#6A737D;">// 如果执行过程中遇到异常，将交给 HandlerExceptionResolvers</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initRequestToViewNameTranslator</span><span style="color:#E1E4E8;">(context); </span><span style="color:#6A737D;">// 直接解析请求到视图名</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">/** 我们自己会实现*/</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initViewResolvers</span><span style="color:#E1E4E8;">(context);</span><span style="color:#6A737D;">// 通过 viewResolver 解析逻辑试图到具体试图实现</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initFlashMapManager</span><span style="color:#E1E4E8;">(context); </span><span style="color:#6A737D;">// flash 映射管理器</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onRefresh</span><span style="color:#24292E;">(ApplicationContext context) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// Strategy 策略</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initStrategies</span><span style="color:#24292E;">(context);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initStrategies</span><span style="color:#24292E;">(ApplicationContext context) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 有九个策略</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 针对于每个用户请求，都会经过一些处理的策略之后，最终才能会有结果输出。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 每种策略可以自定义敢于，但是最终的结果都是一致</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// ModelAndView</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// ==========这里就是传输中的 Spring MVC 中的九大组件=========</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initMultipartResolver</span><span style="color:#24292E;">(context); </span><span style="color:#6A737D;">// 文件上传解析，如果请求类型是 multipart 将通过 MultipartREsolver</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initLocaleResolver</span><span style="color:#24292E;">(context);</span><span style="color:#6A737D;">// 本地化解析</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initThemeResolver</span><span style="color:#24292E;">(context);</span><span style="color:#6A737D;">// 主题解析</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">/** 我们自己会实现  */</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initHandlerMappings</span><span style="color:#24292E;">(context);</span><span style="color:#6A737D;">// 通过 HandlerMapping，将请求映射到处理器</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">/** 我们自己会实现*/</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initHandlerAdapters</span><span style="color:#24292E;">(context);</span><span style="color:#6A737D;">// 通过 HandlerAdapter 继续进行多类型的参数的动态匹配</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initHandlerExceptionResolvers</span><span style="color:#24292E;">(context);</span><span style="color:#6A737D;">// 如果执行过程中遇到异常，将交给 HandlerExceptionResolvers</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initRequestToViewNameTranslator</span><span style="color:#24292E;">(context); </span><span style="color:#6A737D;">// 直接解析请求到视图名</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">/** 我们自己会实现*/</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initViewResolvers</span><span style="color:#24292E;">(context);</span><span style="color:#6A737D;">// 通过 viewResolver 解析逻辑试图到具体试图实现</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initFlashMapManager</span><span style="color:#24292E;">(context); </span><span style="color:#6A737D;">// flash 映射管理器</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h5 id="请求过程" tabindex="-1">请求过程： <a class="header-anchor" href="#请求过程" aria-label="Permalink to &quot;请求过程：&quot;">​</a></h5><p><img src="`+p+'" alt="SpringMVC请求过程"></p><p><code>FrameworkServlet.processRequest()</code></p><ul><li><code>doService()</code><ul><li><code>DispatcherServlet.doService()</code></li></ul></li></ul><p>抽象方法调用子类实现，叫做模板方法模式。</p><h5 id="mvc-的基本原理" tabindex="-1">MVC 的基本原理： <a class="header-anchor" href="#mvc-的基本原理" aria-label="Permalink to &quot;MVC 的基本原理：&quot;">​</a></h5><p><img src="'+l+'" alt="SpringMVC基本原理"></p><p>Spring url 是可以支持正则表达式的。</p><h5 id="spring-mvc-讨论" tabindex="-1">Spring MVC 讨论 <a class="header-anchor" href="#spring-mvc-讨论" aria-label="Permalink to &quot;Spring MVC 讨论&quot;">​</a></h5><p>HandlerMapping 是模范了 Struts ActionMapping</p><p>严格地说是 Spring MVC 还支持 Ant Pattern</p><h5 id="马哥-那你认为它能够干掉-struts-是因为它的哪一点优点呢" tabindex="-1">马哥，那你认为它能够干掉 struts 是因为它的哪一点优点呢？ <a class="header-anchor" href="#马哥-那你认为它能够干掉-struts-是因为它的哪一点优点呢" aria-label="Permalink to &quot;马哥，那你认为它能够干掉 struts 是因为它的哪一点优点呢？&quot;">​</a></h5><p>主要是非 Spring MVC，获取 Bean 的方式比较麻烦</p><p>需要通过 Spring 应用上下文获取</p><p>并且对于 REST 支持，其他框架相对薄弱</p><p>Spring MVC 是 Struts 2 + JAX-RS 的混合体</p><blockquote><p>JAX-RS: Java API for RESTful Web Services</p></blockquote>',38),r=[t];function c(i,E,y,d,u,m){return n(),a("div",null,r)}const g=s(o,[["render",c]]);export{v as __pageData,g as default};
