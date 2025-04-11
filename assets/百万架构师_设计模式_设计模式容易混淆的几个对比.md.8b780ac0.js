import{_ as a,o as e,h as t,Q as n}from"./chunks/framework.da611722.js";const v=JSON.parse('{"title":"设计模式容易混淆的几个对比 | JavaGuide","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://JavaGuide.net/百万架构师/设计模式/设计模式容易混淆的几个对比.html"}],["meta",{"name":"keywords","content":"设计模式容易混淆的几个对比 , JavaGuide , JavaGuide官网, Java面试指南, Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],["meta",{"name":"og:url","content":"https://JavaGuide.net"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"og:image","content":"https://JavaGuide.net/og.png"}],["meta",{"name":"og:title","content":"设计模式容易混淆的几个对比 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"og:description","content":"设计模式容易混淆的几个对比 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:site","content":"https://JavaGuide.net"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:creator","content":"nogeek.cn"}],["meta",{"name":"twitter:title","content":"设计模式容易混淆的几个对比 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"twitter:description","content":"设计模式容易混淆的几个对比 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:image","content":"https://JavaGuide.net/og.png"}],["meta",{"name":"sogou_site_verification","content":"fcAkazTXFd"}],["meta",{"name":"baidu-site-verification","content":"codeva-MXEPYsXKGk"}],["meta",{"name":"msvalidate.01","content":"9F2D57CFC59E8031212A166878638B15"}]]},"headers":[],"relativePath":"百万架构师/设计模式/设计模式容易混淆的几个对比.md","filePath":"百万架构师/设计模式/设计模式容易混淆的几个对比.md","lastUpdated":1741277271000}'),s={name:"百万架构师/设计模式/设计模式容易混淆的几个对比.md"},i=n('<h1 id="设计模式容易混淆的几个对比" tabindex="-1">设计模式容易混淆的几个对比 <a class="header-anchor" href="#设计模式容易混淆的几个对比" aria-label="Permalink to &quot;设计模式容易混淆的几个对比&quot;">​</a></h1><h1 id="_1、代理模式跟委派模式混淆" tabindex="-1">1、代理模式跟委派模式混淆 <a class="header-anchor" href="#_1、代理模式跟委派模式混淆" aria-label="Permalink to &quot;1、代理模式跟委派模式混淆&quot;">​</a></h1><p>委派就是说全权代理</p><p>代理只参与某一个环节，委派参与整个环节</p><p>委派可以说是一个静态代理</p><p>Porxy 传一个接口，传实现类不行吗？</p><p>Java核心思想：面向接口编程</p><p>OOP：用代码来解释生活</p><p>接口：只是一种规范，做任何事前以前先思考好以后，再去动手（制定好规范），三思而后行</p><p>实现类:必须先有接口，开发顺序天生决定了</p><p>中介：租房子 代理人（专业化），要租房子的人，也许还没出生</p><h1 id="_2、命令模式策略模式混淆" tabindex="-1">2、命令模式策略模式混淆 <a class="header-anchor" href="#_2、命令模式策略模式混淆" aria-label="Permalink to &quot;2、命令模式策略模式混淆&quot;">​</a></h1><p>命令模式： 注重命令的个数，分类相当于是菜单的（内容如何定义）</p><p>没有UI以前 DOC界面</p><p>请选择以下功能</p><p>1.开户 2.转账 3.挂失 4.退出</p><p>1.信用卡 2.借记卡</p><h1 id="_3、多态和策略混淆" tabindex="-1">3、多态和策略混淆 <a class="header-anchor" href="#_3、多态和策略混淆" aria-label="Permalink to &quot;3、多态和策略混淆&quot;">​</a></h1><p>多态：是Java的一种语法（有些语言的语法是不支持多态的，它照样也要用来实现业务逻辑，也要使用设计模式）</p><p>策略：是一种经验的总结</p><h1 id="_4-观察者模式结合动态代理" tabindex="-1">4.观察者模式结合动态代理 <a class="header-anchor" href="#_4-观察者模式结合动态代理" aria-label="Permalink to &quot;4.观察者模式结合动态代理&quot;">​</a></h1><h1 id="_5-模板方法和策略模式的区别" tabindex="-1">5.模板方法和策略模式的区别 <a class="header-anchor" href="#_5-模板方法和策略模式的区别" aria-label="Permalink to &quot;5.模板方法和策略模式的区别&quot;">​</a></h1><p>关心业务流程的固定（修改某一个部分的逻辑，但不影响流程的执行）</p><p>策略注重的选择结果</p><h1 id="_6-反射底层" tabindex="-1">6.反射底层 <a class="header-anchor" href="#_6-反射底层" aria-label="Permalink to &quot;6.反射底层&quot;">​</a></h1><p>操作的是字节码，由JVM提供安全保障</p><p>当你要用代码去操作代码的时候，绝对是要用反射的 原则：总之首先要找到字节码</p><h1 id="_7-看源码最大的痛点在哪里" tabindex="-1">7.看源码最大的痛点在哪里？ <a class="header-anchor" href="#_7-看源码最大的痛点在哪里" aria-label="Permalink to &quot;7.看源码最大的痛点在哪里？&quot;">​</a></h1><p>找不到入口</p><p>Main方法启动,这就是入口</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  ClassPathXmlApplicationContext app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  ClassPathXmlApplicationContext app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Listener</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Listener</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Servlet：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">DispatcherServlet 这就是入口</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">DispatcherServlet 这就是入口</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一定要先看文档 了解了设计模式以后，你会跟作者想到一块去 7分猜测，3分验证（英雄所见略同）</p>',35),p=[i];function o(l,r,c,d,h,u){return e(),t("div",null,p)}const _=a(s,[["render",o]]);export{v as __pageData,_ as default};
