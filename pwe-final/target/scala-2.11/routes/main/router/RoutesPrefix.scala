
// @GENERATOR:play-routes-compiler
// @SOURCE:F:/Documents/repo/PWE-Final/pwe-final/conf/routes
// @DATE:Wed Jun 14 21:38:23 BRT 2017


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
