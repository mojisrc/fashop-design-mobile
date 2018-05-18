webpackJsonp([15],{1156:function(n,s,a){n.exports={basic:a(1241)}},1241:function(n,s){n.exports={content:[],meta:{order:0,title:"\u57fa\u672c",filename:"components/ws-scroll-view/demo/basic.md",id:"components-ws-scroll-view-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> WsScrollView<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fashopd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'/trade.htm?page=buy\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'info\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'\u4e70\u5165\'</span><span class="token punctuation">,</span> <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'BJS49.P2325.B6628\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'/trade.htm?page=sell\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'check\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'\u5356\u51fa\'</span><span class="token punctuation">,</span> <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'BJS49.P2325.B6629\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'/trade.htm?page=revoke\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'info\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'\u64a4\u5355\'</span><span class="token punctuation">,</span> <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'BJS49.P2325.B6630\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'/trade.htm?page=query\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'check-circle\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'\u67e5\u8be2\'</span><span class="token punctuation">,</span> <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'BJS49.P2325.B6631\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'/transfer.htm\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'check\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'\u94f6\u8bc1\'</span><span class="token punctuation">,</span> <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'BJS49.P2325.B6632\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">renderItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>url<span class="token punctuation">,</span> type<span class="token punctuation">,</span> text<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">pushWindow</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content-wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>biz-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WsScrollView</span> <span class="token attr-name">visibleItemsAmount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>d <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderItem</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}}});