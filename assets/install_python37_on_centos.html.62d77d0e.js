import{_ as n,e as s}from"./app.39d731c7.js";const e={},a=s(`<h1 id="\u5728-centos-\u5B89\u88C5-python3-7" tabindex="-1"><a class="header-anchor" href="#\u5728-centos-\u5B89\u88C5-python3-7" aria-hidden="true">#</a> \u5728 CentOS \u5B89\u88C5 Python3.7</h1><h2 id="\u4E0B\u8F7Dpython\u6E90\u7801\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Dpython\u6E90\u7801\u5305" aria-hidden="true">#</a> \u4E0B\u8F7DPython\u6E90\u7801\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>wget https://www.python.org/ftp/python/3.7.12/Python-3.7.12.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5\u524D\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u524D\u51C6\u5907" aria-hidden="true">#</a> \u5B89\u88C5\u524D\u51C6\u5907</h2><p>\u5B89\u88C5\u4F9D\u8D56\u7EC4\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y install wget zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make libffi-devel xz-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u89E3\u538B\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B\u5B89\u88C5" aria-hidden="true">#</a> \u89E3\u538B\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u89E3\u538B\u5230/usr/local/src\u76EE\u5F55
$ tar zvxf Python-3.7.12.tgz -C /usr/local/src
$ cd /usr/local/src/Python-3.7.12
# \u7F16\u8BD1\u524D\u914D\u7F6E
$ ./configure prefix=/usr/local/python3 --enable-shared
# \u7F16\u8BD1\u6784\u5EFA
$ make -j8
# \u5B89\u88C5Python
$ make install
# \u6E05\u7406\u7F16\u8BD1\u4EA7\u51FA\u7684\u4E2D\u95F4\u6587\u4EF6
$ make clean
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684Python\u53EF\u6267\u884C\u6587\u4EF6\u5230/usr/local/bin\u76EE\u5F55
$ ln -s /usr/local/python3/bin/python3 /usr/local/bin/python
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684pip3\u53EF\u6267\u884C\u6587\u4EF6\u5230/usr/local/bin\u76EE\u5F55
$ ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684Python\u52A8\u6001\u5E93
$ ln -s /usr/local/python3/lib/libpython3.7m.so.1.0 /usr/lib/libpython3.7m.so.1.0
# \u914D\u7F6E\u52A8\u6001\u5E93
$ ldconfig
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5" aria-hidden="true">#</a> \u68C0\u67E5</h2><p>\u68C0\u67E5Python\u7248\u672C\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python --version
Python 3.7.12  # \u6B63\u5E38\u8F93\u51FA\uFF0C\u8868\u793A\u5B89\u88C5\u6210\u529F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6CE8\uFF1A</p><ol><li>\u94FE\u63A5\u5230/usr/local/bin/\u76EE\u5F55\u4E0D\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u8F6F\u4EF6\uFF08\u6BD4\u5982yum\uFF09\u7684\u4F7F\u7528\uFF0C\u56E0\u4E3A yum \u5DE5\u5177\u6307\u5B9A\u7684Python\u8DEF\u5F84\u662F<code>/usr/bin/python</code></li><li>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0CPATH\u914D\u7F6E\u662F\u5148<code>/usr/local/bin</code>\u518D<code>/usr/bin</code></li><li>\u68C0\u67E5<code>python -v</code>\u8F93\u51FA\u7ED3\u679C\u662F\u5426\u4E3A<code>Python 3.7.12</code>\u7248\u672C\uFF0C\u5982\u679C\u4E0D\u662F\u8BE5\u7248\u672C\uFF0C\u53EF\u80FD\u5F71\u54CD\u540E\u7EED\u4F9D\u8D56\u5B89\u88C5\u548C\u670D\u52A1\u8FD0\u884C</li></ol><h2 id="pypi\u4E0B\u8F7D\u6E90\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#pypi\u4E0B\u8F7D\u6E90\u914D\u7F6E" aria-hidden="true">#</a> pypi\u4E0B\u8F7D\u6E90\u914D\u7F6E</h2><p>pip\u9ED8\u8BA4\u662F\u5230<code>pypi</code>\u5B98\u65B9\u6E90\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5305\uFF0C\u4E0B\u8F7D\u901F\u5EA6\u53EF\u80FD\u4F1A\u6BD4\u8F83\u6162\uFF0C\u53EF\u4EE5\u8003\u8651\u8C03\u6574\u4E3A\u817E\u8BAF\u4E91\u7684<code>pypi</code>\u4E0B\u8F7D\u6E90\uFF0C\u8C03\u6574\u65B9\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir ~/.pip/
echo &quot;extra-index-url = https://mirrors.cloud.tencent.com/pypi/simple&quot; &gt;&gt; ~/.pip/pip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E00\u952E\u5B89\u88C5\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u952E\u5B89\u88C5\u811A\u672C" aria-hidden="true">#</a> \u4E00\u952E\u5B89\u88C5\u811A\u672C</h2><p>\u4EE5\u4E0B\u811A\u672C\u5185\u5BB9\u662F\u4E0A\u9762\u7684\u6B65\u9AA4\u96C6\u5408\uFF0C\u7701\u53BB\u4E86\u590D\u5236\u7C98\u8D34\u7684\u91CD\u590D\u52A8\u4F5C\u3002</p><ol><li>\u521B\u5EFA\u6587\u4EF6 <code>install_py37.sh</code>\uFF0C\u5199\u5165\u4EE5\u4E0B shell \u811A\u672C</li><li>\u8D4B\u4E88\u6267\u884C\u6743\u9650\uFF0C<code>chmox +x install_py37.sh</code></li><li>\u6267\u884C\u811A\u672C\uFF0C<code>./install_py37.sh</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/env bash

## \u4E0B\u8F7D Python \u6E90\u7801\uFF0C\u5982\u679C\u5DF2\u4E0B\u8F7D\u6E90\u7801\u5728\u811A\u672C\u5F53\u524D\u76EE\u5F55\u4E0B\uFF0C\u53EF\u6CE8\u91CA\u8DF3\u8FC7\u4E0B\u8F7D\u6B65\u9AA4
wget https://www.python.org/ftp/python/3.7.12/Python-3.7.12.tgz

## \u5B89\u88C5\u7F16\u8BD1\u4F9D\u8D56\u7EC4\u4EF6
yum -y install wget zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make libffi-devel xz-devel

## \u89E3\u538B\u5B89\u88C5
# \u89E3\u538B\u5230/usr/local/src\u76EE\u5F55
tar zvxf Python-3.7.12.tgz -C /usr/local/src
cd /usr/local/src/Python-3.7.12
# \u7F16\u8BD1\u524D\u914D\u7F6E
./configure prefix=/usr/local/python3 --enable-shared
# \u7F16\u8BD1\u6784\u5EFA
make -j8
# \u5B89\u88C5Python
make install
# \u6E05\u7406\u7F16\u8BD1\u4EA7\u51FA\u7684\u4E2D\u95F4\u6587\u4EF6
make clean
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684Python\u53EF\u6267\u884C\u6587\u4EF6\u5230/usr/local/bin\u76EE\u5F55
ln -s /usr/local/python3/bin/python3 /usr/local/bin/python
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684pip3\u53EF\u6267\u884C\u6587\u4EF6\u5230/usr/local/bin\u76EE\u5F55
ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684Python\u52A8\u6001\u5E93
ln -s /usr/local/python3/lib/libpython3.7m.so.1.0 /usr/lib/libpython3.7m.so.1.0
# \u914D\u7F6E\u52A8\u6001\u5E93
ldconfig

## \u68C0\u67E5Python\u7248\u672C\u662F\u5426\u5B89\u88C5\u6210\u529F
echo -e &quot;\\033[1;42;37m[$(date &quot;+%Y/%m/%d %H:%M:%S&quot;)] [Check]: \u68C0\u67E5Python\u7248\u672C\\033[0m&quot;
python --version
echo -e &quot;\\033[1;42;37m[$(date &quot;+%Y/%m/%d %H:%M:%S&quot;)] [Check]: \u68C0\u67E5Python\u7248\u672C\\033[0m&quot;

## pypi\u4E0B\u8F7D\u6E90\u914D\u7F6E
mkdir ~/.pip/
echo &quot;extra-index-url = https://mirrors.cloud.tencent.com/pypi/simple&quot; &gt;&gt; ~/.pip/pip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,20);function l(r,i){return a}var c=n(e,[["render",l],["__file","install_python37_on_centos.html.vue"]]);export{c as default};
