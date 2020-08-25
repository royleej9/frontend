({
	// node r.js -o build.js
	mainConfigFile: '../config.js',	// 설정 ㅍ일
	removeCombined: true,	// 모듈화 된 파일과 관련된 js 파일 삭제
	findNestedDependencies: false,
	inlineText: true,	// html 포함 
	dir: '../../../dist/js/app',	// 빌드 결과 폴더
	fileExclusionRegExp: /build/,	// 빌드 결과에서 제외	
	optimizeCss: "standard",	// css 최적화 
//	optimize: "none",		// 압축 여부
	preserveLicenseComments: true, // 라이센스 주석 삭제 않기 
	modules: [
	          {
	              name: "commonLibs"  // 사용자가 작성한 js파일을 제외한 파일들을 한 파일로 생성 예) jquery, backbone 등... 
	          },
	          {
	              name: "config"
	          },
	          {
	              name: "loginView",
	              exclude: [
	                  'commonLibs',
	                  'config'
	              ]
	          },
	          {
	              name: "loginModalView",
	              exclude: [
	                  'commonLibs',
	                  'config'
	              ]
	          }
    ]
})