import{_ as a,o as e,h as n,Q as s}from"./chunks/framework.da611722.js";const b=JSON.parse('{"title":"手写定制自己的ORM框架 | JavaGuide","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://javaguide.net/百万架构师/Spring 源码分析/手写定制自己的ORM框架.html"}],["meta",{"name":"keywords","content":"手写定制自己的ORM框架 , JavaGuide , JavaGuide官网, Java面试指南, Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],["meta",{"name":"og:url","content":"https://JavaGuide.net"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"og:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"og:title","content":"手写定制自己的ORM框架 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"og:description","content":"手写定制自己的ORM框架 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:site","content":"https://javaguide.net"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:creator","content":"nogeek.cn"}],["meta",{"name":"twitter:title","content":"手写定制自己的ORM框架 | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"twitter:description","content":"手写定制自己的ORM框架 | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"sogou_site_verification","content":"fcAkazTXFd"}],["meta",{"name":"baidu-site-verification","content":"codeva-MXEPYsXKGk"}],["meta",{"name":"msvalidate.01","content":"9F2D57CFC59E8031212A166878638B15"}]]},"headers":[],"relativePath":"百万架构师/Spring 源码分析/手写定制自己的ORM框架.md","filePath":"百万架构师/Spring 源码分析/手写定制自己的ORM框架.md","lastUpdated":1741277271000}'),t={name:"百万架构师/Spring 源码分析/手写定制自己的ORM框架.md"},l=s(`<h1 id="基于spring5实现orm" tabindex="-1">基于Spring5实现ORM <a class="header-anchor" href="#基于spring5实现orm" aria-label="Permalink to &quot;基于Spring5实现ORM&quot;">​</a></h1><h2 id="初衷" tabindex="-1">初衷： <a class="header-anchor" href="#初衷" aria-label="Permalink to &quot;初衷：&quot;">​</a></h2><h3 id="单表查询不写一句sql-自动生成" tabindex="-1">单表查询不写一句SQL，自动生成 <a class="header-anchor" href="#单表查询不写一句sql-自动生成" aria-label="Permalink to &quot;单表查询不写一句SQL，自动生成&quot;">​</a></h3><h3 id="查询的结果自动映射为java对象" tabindex="-1">查询的结果自动映射为Java对象 <a class="header-anchor" href="#查询的结果自动映射为java对象" aria-label="Permalink to &quot;查询的结果自动映射为Java对象&quot;">​</a></h3><h3 id="_1、我要传一个复杂的查询条件-怎么传" tabindex="-1">1、我要传一个复杂的查询条件，怎么传？ <a class="header-anchor" href="#_1、我要传一个复杂的查询条件-怎么传" aria-label="Permalink to &quot;1、我要传一个复杂的查询条件，怎么传？&quot;">​</a></h3><p>想到了用对象来传，但是有问题</p><ul><li><p>a)、跨表联查的条件</p></li><li><p>b)、无法携带判断逻辑的运算符</p></li><li><p>c)、or 或者 and 无法区分</p></li></ul><h3 id="_2、自动映射类型判断麻烦-用rs-getobject-方法" tabindex="-1">2、自动映射类型判断麻烦 ，用rs.getObject()方法 <a class="header-anchor" href="#_2、自动映射类型判断麻烦-用rs-getobject-方法" aria-label="Permalink to &quot;2、自动映射类型判断麻烦 ，用rs.getObject()方法&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 各自的厂商实现自己的链接</span></span>
<span class="line"><span style="color:#6A737D;">// MySQL为例,以下类型Java语言中是不存在的</span></span>
<span class="line"><span style="color:#6A737D;">// bigint ，由开发厂商自动映射好了</span></span>
<span class="line"><span style="color:#6A737D;">// varchar</span></span>
<span class="line"><span style="color:#6A737D;">// int</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	 System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(rs.</span><span style="color:#B392F0;">getObject</span><span style="color:#E1E4E8;">(columnName).</span><span style="color:#B392F0;">getClass</span><span style="color:#E1E4E8;">());   </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 各自的厂商实现自己的链接</span></span>
<span class="line"><span style="color:#6A737D;">// MySQL为例,以下类型Java语言中是不存在的</span></span>
<span class="line"><span style="color:#6A737D;">// bigint ，由开发厂商自动映射好了</span></span>
<span class="line"><span style="color:#6A737D;">// varchar</span></span>
<span class="line"><span style="color:#6A737D;">// int</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	 System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(rs.</span><span style="color:#6F42C1;">getObject</span><span style="color:#24292E;">(columnName).</span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">());   </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3、跨多种数据库如何统一api" tabindex="-1">3、跨多种数据库如何统一API <a class="header-anchor" href="#_3、跨多种数据库如何统一api" aria-label="Permalink to &quot;3、跨多种数据库如何统一API&quot;">​</a></h3><h3 id="_4、数据源的动态切换如何来做" tabindex="-1">4、数据源的动态切换如何来做？ <a class="header-anchor" href="#_4、数据源的动态切换如何来做" aria-label="Permalink to &quot;4、数据源的动态切换如何来做？&quot;">​</a></h3><p>AbstractRoutingDataSource数据源自动路由，执行数据连接以前，根据业务规则来动态获取到一个连接</p><p>从而达到动态切换数据库连接的效果</p><p>为了操作方便，每次置换完，执行完成以后，会将数据源恢复到默认的设置</p><h3 id="_5、sql注入" tabindex="-1">5、SQL注入 <a class="header-anchor" href="#_5、sql注入" aria-label="Permalink to &quot;5、SQL注入&quot;">​</a></h3><p>1、首先将QueryRule构建好，把所有的查询条件保存到一个ruleList中</p><p>2、再写一个工具类QueryRuleSqlBuilder，循环ruleList对每一个条件分别处理processAnything，主要是构建where后面语句</p><p>3、process以后propertisList 保存诸如 and name = ? ， values tom,利用索引位置相同，来进行一一对应</p><h3 id="问-selectbysql就相当于没有使用框架-不符合之前统一参数-统一查询方法" tabindex="-1">问：selectbysql就相当于没有使用框架，不符合之前统一参数，统一查询方法？ <a class="header-anchor" href="#问-selectbysql就相当于没有使用框架-不符合之前统一参数-统一查询方法" aria-label="Permalink to &quot;问：selectbysql就相当于没有使用框架，不符合之前统一参数，统一查询方法？&quot;">​</a></h3><p>答：不推荐使用，如果一定要多表查询，只有两种方案</p><p>a) 写SQL语句</p><p>b) 查多次，在内存中处理数据关系，一般会在Service中进行处理</p><hr><p>在Java代码中处理，会让程序员更加容易理解</p><p>如果给大串SQL，这会让后来接手的人直接想死</p><p>我见过一条SQL语句有10行之长的，我直接看晕了</p><p>----------- 在我的团队中，极少数使用多表关联查询 -------------</p><h3 id="问-······这个pk主键传过来怎么用-有什么好处" tabindex="-1">问：······这个PK主键传过来怎么用？有什么好处 <a class="header-anchor" href="#问-······这个pk主键传过来怎么用-有什么好处" aria-label="Permalink to &quot;问：······这个PK主键传过来怎么用？有什么好处&quot;">​</a></h3><p>答：<code>&lt;T extends Serializable,PK extends Serializable&gt;</code> 传与不传不影响功能</p><p>目的：返回结果不需要再手动的强制类型转换</p><h3 id="问-如果用老师这个框架来组装sql-复杂查询的话-会不会变得难以组装" tabindex="-1">问：如果用老师这个框架来组装SQL，复杂查询的话，会不会变得难以组装？ <a class="header-anchor" href="#问-如果用老师这个框架来组装sql-复杂查询的话-会不会变得难以组装" aria-label="Permalink to &quot;问：如果用老师这个框架来组装SQL，复杂查询的话，会不会变得难以组装？&quot;">​</a></h3><p>比如说查某个表的字段是另外一个表的条件，以此类推多个表的话？</p><p>答：这就是属于多表查询</p><h3 id="问-连接操作-还有如果表没有主键pk-还需要传" tabindex="-1">问：连接操作，还有如果表没有主键PK 还需要传？ <a class="header-anchor" href="#问-连接操作-还有如果表没有主键pk-还需要传" aria-label="Permalink to &quot;问：连接操作，还有如果表没有主键PK 还需要传？&quot;">​</a></h3><p>答：只要用我的框架，每个表必须有主键，哪怕是自增</p><p>为了降低程序设计的复杂度</p>`,36),p=[l];function r(i,o,c,d,h,u){return e(),n("div",null,p)}const v=a(t,[["render",r]]);export{b as __pageData,v as default};
