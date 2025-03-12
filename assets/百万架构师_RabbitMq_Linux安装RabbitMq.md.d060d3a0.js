import{_ as s,o as a,h as n,Q as l}from"./chunks/framework.da611722.js";const p="/assets/RabbitMQ_Linux安装_版本.8dd2f177.png",e="/assets/RabbitMQ_Linux安装_erlang版本.ec75d6a8.png",F=JSON.parse('{"title":"Linux安装RabbitMq | JavaGuide","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://javaguide.net/百万架构师/RabbitMq/Linux安装RabbitMq.html"}],["meta",{"name":"keywords","content":"Linux安装RabbitMq , JavaGuide , JavaGuide官网, Java面试指南, Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],["meta",{"name":"og:url","content":"https://JavaGuide.net"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"og:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"og:title","content":"Linux安装RabbitMq | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"og:description","content":"Linux安装RabbitMq | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:site","content":"https://javaguide.net"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:creator","content":"nogeek.cn"}],["meta",{"name":"twitter:title","content":"Linux安装RabbitMq | JavaGuide | Java面试指南 | JavaGuide官网"}],["meta",{"name":"twitter:description","content":"Linux安装RabbitMq | JavaGuide | Java面试指南 | JavaGuide官网 | 「JavaGuide.net」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide.net ！"}],["meta",{"name":"twitter:image","content":"https://javaguide.net/JavaGuide-og.png"}],["meta",{"name":"sogou_site_verification","content":"fcAkazTXFd"}],["meta",{"name":"baidu-site-verification","content":"codeva-MXEPYsXKGk"}],["meta",{"name":"msvalidate.01","content":"9F2D57CFC59E8031212A166878638B15"}]]},"headers":[],"relativePath":"百万架构师/RabbitMq/Linux安装RabbitMq.md","filePath":"百万架构师/RabbitMq/Linux安装RabbitMq.md","lastUpdated":1741277271000}'),o={name:"百万架构师/RabbitMq/Linux安装RabbitMq.md"},t=l('<h1 id="rpm包安装rabbitmq" tabindex="-1">RPM包安装RabbitMQ <a class="header-anchor" href="#rpm包安装rabbitmq" aria-label="Permalink to &quot;RPM包安装RabbitMQ&quot;">​</a></h1><p>RabbitMQ的安装非常简单，由于RabbitMQ依赖于Erlang，所以需要先安装Erlang，解决依赖关系后，就可以安装RabbitMQ了。注意，在安装Erlang前，需要先安装socat</p><h4 id="安装socat" tabindex="-1">安装socat <a class="header-anchor" href="#安装socat" aria-label="Permalink to &quot;安装socat&quot;">​</a></h4><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[root@nogeek ]# yum -y install socat</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[root@nogeek ]# yum -y install socat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="下载rpm包" tabindex="-1">下载RPM包 <a class="header-anchor" href="#下载rpm包" aria-label="Permalink to &quot;下载RPM包&quot;">​</a></h4><h5 id="rabbitmq" tabindex="-1">RabbitMQ： <a class="header-anchor" href="#rabbitmq" aria-label="Permalink to &quot;RabbitMQ：&quot;">​</a></h5><p><a href="http://www.rabbitmq.com/install-rpm.html#downloads" target="_blank" rel="noreferrer">http://www.rabbitmq.com/install-rpm.html#downloads</a></p><p><img src="'+p+'" alt="RabbitMQ_Linux安装_版本.png"></p><h5 id="erlang" tabindex="-1">erlang： <a class="header-anchor" href="#erlang" aria-label="Permalink to &quot;erlang：&quot;">​</a></h5><p><a href="https://www.erlang-solutions.com/resources/download.html" target="_blank" rel="noreferrer">https://www.erlang-solutions.com/resources/download.html</a></p><p><img src="'+e+`" alt="RabbitMQ_Linux安装_erlang版本.png"></p><h5 id="注意-erlang-和-rabbitmq-的对应版本" tabindex="-1">注意 erlang 和 RabbitMq 的对应版本 <a class="header-anchor" href="#注意-erlang-和-rabbitmq-的对应版本" aria-label="Permalink to &quot;注意 erlang 和 RabbitMq 的对应版本&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[root@localhost srv]# ll</span></span>
<span class="line"><span style="color:#B392F0;">总用量</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">23536</span></span>
<span class="line"><span style="color:#B392F0;">-rwxr-xr-x</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">18579348</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">月</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">31</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">23</span><span style="color:#9ECBFF;">:33</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">erlang-19.0.4-1.el6.x86_64.rpm</span></span>
<span class="line"><span style="color:#B392F0;">-rwxr-xr-x</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">5520417</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">月</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">31</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">23</span><span style="color:#9ECBFF;">:33</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq-server-3.6.5-1.noarch.rpm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[root@localhost srv]# ll</span></span>
<span class="line"><span style="color:#6F42C1;">总用量</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">23536</span></span>
<span class="line"><span style="color:#6F42C1;">-rwxr-xr-x</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">18579348</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">月</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">31</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">23</span><span style="color:#032F62;">:33</span><span style="color:#24292E;"> </span><span style="color:#032F62;">erlang-19.0.4-1.el6.x86_64.rpm</span></span>
<span class="line"><span style="color:#6F42C1;">-rwxr-xr-x</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">5520417</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">月</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">31</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">23</span><span style="color:#032F62;">:33</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq-server-3.6.5-1.noarch.rpm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3、安装Erlang</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[root@localhost srv]# rpm -ivh erlang-19.0.4-1.el6.x86_64.rpm</span></span>
<span class="line"><span style="color:#B392F0;">Preparing...</span><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">########################################### [100%]</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">1:erlang</span><span style="color:#E1E4E8;">                 </span><span style="color:#6A737D;">########################################### [100%]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[root@localhost srv]# rpm -ivh erlang-19.0.4-1.el6.x86_64.rpm</span></span>
<span class="line"><span style="color:#6F42C1;">Preparing...</span><span style="color:#24292E;">                </span><span style="color:#6A737D;">########################################### [100%]</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">1:erlang</span><span style="color:#24292E;">                 </span><span style="color:#6A737D;">########################################### [100%]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>4、安装RabbitMQ</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[root@localhost srv]# rpm -ivh rabbitmq-server-3.6.5-1.noarch.rpm</span></span>
<span class="line"><span style="color:#B392F0;">warning:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq-server-3.6.5-1.noarch.rpm:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Header</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">V4</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">RSA/SHA1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Signature,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ID</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6026</span><span style="color:#9ECBFF;">dfca:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NOKEY</span></span>
<span class="line"><span style="color:#B392F0;">Preparing...</span><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">########################################### [100%]</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">1:rabbitmq-server</span><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">########################################### [100%]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[root@localhost srv]# rpm -ivh rabbitmq-server-3.6.5-1.noarch.rpm</span></span>
<span class="line"><span style="color:#6F42C1;">warning:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq-server-3.6.5-1.noarch.rpm:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Header</span><span style="color:#24292E;"> </span><span style="color:#032F62;">V4</span><span style="color:#24292E;"> </span><span style="color:#032F62;">RSA/SHA1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Signature,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ID</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6026</span><span style="color:#032F62;">dfca:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NOKEY</span></span>
<span class="line"><span style="color:#6F42C1;">Preparing...</span><span style="color:#24292E;">                </span><span style="color:#6A737D;">########################################### [100%]</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">1:rabbitmq-server</span><span style="color:#24292E;">        </span><span style="color:#6A737D;">########################################### [100%]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_5、配置" tabindex="-1">5、配置 <a class="header-anchor" href="#_5、配置" aria-label="Permalink to &quot;5、配置&quot;">​</a></h3><h5 id="a、创建rabbitmq的配置文件-并允许guest进行登录" tabindex="-1">a、创建rabbitmq的配置文件，并允许guest进行登录 <a class="header-anchor" href="#a、创建rabbitmq的配置文件-并允许guest进行登录" aria-label="Permalink to &quot;a、创建rabbitmq的配置文件，并允许guest进行登录&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># cat /etc/rabbitmq/rabbitmq.config</span></span>
<span class="line"><span style="color:#E1E4E8;">[{rabbit, [{loopback_users, []}]}].</span></span>
<span class="line"><span style="color:#6A737D;"># ll /etc/rabbitmq/rabbitmq.config </span></span>
<span class="line"><span style="color:#B392F0;">-rw-r--r--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">36</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Nov</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">18</span><span style="color:#9ECBFF;">:35</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/rabbitmq/rabbitmq.config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># cat /etc/rabbitmq/rabbitmq.config</span></span>
<span class="line"><span style="color:#24292E;">[{rabbit, [{loopback_users, []}]}].</span></span>
<span class="line"><span style="color:#6A737D;"># ll /etc/rabbitmq/rabbitmq.config </span></span>
<span class="line"><span style="color:#6F42C1;">-rw-r--r--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">36</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Nov</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">18</span><span style="color:#032F62;">:35</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/rabbitmq/rabbitmq.config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意：后面有一个点 “ . ” , 并且将文件属主属组设置为rabbitmq</p><h5 id="b、更改rabbitmq的环境变量" tabindex="-1">b、更改rabbitmq的环境变量 <a class="header-anchor" href="#b、更改rabbitmq的环境变量" aria-label="Permalink to &quot;b、更改rabbitmq的环境变量&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># cat /etc/rabbitmq/rabbitmq-env.conf</span></span>
<span class="line"><span style="color:#E1E4E8;">RABBITMQ_MNESIA_BASE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/data/rabbitmq/mnesia</span></span>
<span class="line"><span style="color:#E1E4E8;">RABBITMQ_LOG_BASE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/data/rabbitmq/log</span></span>
<span class="line"><span style="color:#6A737D;">#ll rabbitmq-env.conf </span></span>
<span class="line"><span style="color:#B392F0;">-rw-r--r--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Nov</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">18</span><span style="color:#9ECBFF;">:35</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq-env.conf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># cat /etc/rabbitmq/rabbitmq-env.conf</span></span>
<span class="line"><span style="color:#24292E;">RABBITMQ_MNESIA_BASE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/data/rabbitmq/mnesia</span></span>
<span class="line"><span style="color:#24292E;">RABBITMQ_LOG_BASE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/data/rabbitmq/log</span></span>
<span class="line"><span style="color:#6A737D;">#ll rabbitmq-env.conf </span></span>
<span class="line"><span style="color:#6F42C1;">-rw-r--r--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Nov</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">18</span><span style="color:#032F62;">:35</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq-env.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="c、创建数据目录和log目录" tabindex="-1">c、创建数据目录和log目录 <a class="header-anchor" href="#c、创建数据目录和log目录" aria-label="Permalink to &quot;c、创建数据目录和log目录&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># mkdir -pv /data/rabbitmq/log</span></span>
<span class="line"><span style="color:#6A737D;"># chowm -R rabbitmq:rabbitmq /data/rabbitmq</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># mkdir -pv /data/rabbitmq/log</span></span>
<span class="line"><span style="color:#6A737D;"># chowm -R rabbitmq:rabbitmq /data/rabbitmq</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="d、启用management插件" tabindex="-1">d、启用management插件 <a class="header-anchor" href="#d、启用management插件" aria-label="Permalink to &quot;d、启用management插件&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rabbitmq-plugins</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rabbitmq_management</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rabbitmq-plugins</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rabbitmq_management</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="e、创建vhost" tabindex="-1">e、创建vhost <a class="header-anchor" href="#e、创建vhost" aria-label="Permalink to &quot;e、创建vhost&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rabbitmqctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add_vhost</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">【Vhost_Name】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rabbitmqctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add_vhost</span><span style="color:#24292E;"> </span><span style="color:#032F62;">【Vhost_Name】</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="f、创建用户" tabindex="-1">f、创建用户 <a class="header-anchor" href="#f、创建用户" aria-label="Permalink to &quot;f、创建用户&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rabbitmqctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add_user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">【username】</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">【password】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rabbitmqctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add_user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">【username】</span><span style="color:#24292E;"> </span><span style="color:#032F62;">【password】</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="g、配置权限" tabindex="-1">g、配置权限 <a class="header-anchor" href="#g、配置权限" aria-label="Permalink to &quot;g、配置权限&quot;">​</a></h5><p>rabbitmqctl set_permissions -p spms spms &#39;.<em>&#39; &#39;.</em>&#39; &#39;.*&#39;</p><p>rabbitmqctl set_user_tags spms administrator</p><h5 id="配置权限" tabindex="-1">配置权限 <a class="header-anchor" href="#配置权限" aria-label="Permalink to &quot;配置权限&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rabbitmqctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set_permissions</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">【Vhost_Name】</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">【username】</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">【conf】【write】【read】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rabbitmqctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set_permissions</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">【Vhost_Name】</span><span style="color:#24292E;"> </span><span style="color:#032F62;">【username】</span><span style="color:#24292E;"> </span><span style="color:#032F62;">【conf】【write】【read】</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Conf：一个正则表达式 match 哪些配置资源能够被该用户访问</p><p>Write：一个正则表达式 match 哪些配置资源能够被该用户读。</p><p>read：一个正则表达式 match 哪些配置资源能够被该用户访问</p><p>例如：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rabbitmqctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set_permissions</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">spms</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">spms</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.*&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.*&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.*&#39;</span></span>
<span class="line"><span style="color:#B392F0;">rabbitmqctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set_user_tags</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">spms</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">administrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rabbitmqctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set_permissions</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">spms</span><span style="color:#24292E;"> </span><span style="color:#032F62;">spms</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.*&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.*&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.*&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">rabbitmqctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set_user_tags</span><span style="color:#24292E;"> </span><span style="color:#032F62;">spms</span><span style="color:#24292E;"> </span><span style="color:#032F62;">administrator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,41),r=[t];function c(i,b,y,E,d,m){return a(),n("div",null,r)}const u=s(o,[["render",c]]);export{F as __pageData,u as default};
