
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/douglas/repo/PWE-Final/pwe-final/conf/routes
// @DATE:Fri Jun 16 18:56:33 BRT 2017


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
