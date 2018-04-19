<template>
  <div class="download-page">
    <div class="download-page-content">
      <div class="down-top"></div>
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yunxiao.hfs4p&from=singlemessage&isappinstalled=1" class="btn-parent"></a>
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yunxiao.haofenshu&from=singlemessage" class="btn-student"></a>
      <div class="down-help">
        <a href="https://mp.weixin.qq.com/s?__biz=MzI4NjM3NTgxMg==&mid=2247483844&idx=1&sn=deb638120862dae81b815c1a6ca9a47c&chksm=ebdcab2fdcab223984f10be94e7d3a7572a7d6281798e5e42fbeca4d87e6acee13c1bbe8c7f5#rd">下载、注册有疑问?</a>
      </div>
      <div class="qr-code">
        <img src="../assets/images/download/downewm.png" alt="">
      </div>
      <div class="footer">
        <p>扫码了解更多教育资讯</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
.download-page{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f16650;
  &-content{
    padding-top: 0.5rem;
    background-color: #f16650;
    box-sizing: border-box;
  }
}
.download-page .down-top {
  background: url(../assets/images/download/down.png) no-repeat bottom center;
  width: 4.93rem;
  height: 3.41rem;
  margin: 0 auto;
  background-size: 100%;
}
.download-page .btn-parent {
  margin-top: 0.75rem;
  width: 100%;
  height: 1rem;
  background: url(../assets/images/download/downparent.png) no-repeat center 0;
  background-size: contain;
  display: block;
}
.download-page .btn-student {
  margin-top: 0.3rem;
  width: 100%;
  height: 1rem;
  background: url(../assets/images/download/downchild.png) no-repeat center 0;
  background-size: contain;
  display: block;
}
.download-page .down-help {
  margin-top: 0.4rem;
  text-align: center;
}
.download-page .down-help a {
  color: #fde6e3;
  font-size: 14px;
  text-decoration: underline;
  display: block;
}
.download-page .qr-code {
  margin-top: 0.7rem;
  background-color: #fff;
  height: 2.3rem;
  width: 2.3rem;
  position: relative;
  left: 50%;
  margin-left: -1.1rem;
}
.download-page .qr-code img {
  width: 2.2rem;
  height: 2.2rem;
  margin: 0.05rem;
}
.download-page .footer {
  text-align: center;
  color: #642c12;
  font-size: 14px;
  margin-top: .25rem;
  padding-bottom: 0.35rem;
}
@media screen and (max-width: 321px) {
  .download-page .down-help a , .download-page .footer{
    font-size: 13px;
  }
}

@media screen and (min-width: 400px) {
  .download-page .down-help a , .download-page .footer{
    font-size: 16px;
  }
}
</style>
