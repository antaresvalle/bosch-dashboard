# Reto XDK Dashboard
Robert Bosch cuenta con laboratorios de prueba especializados con el objetivo de seguir ofreciendo productos de calidad a sus consumidores, asegurando que las pruebas sean correctas, por lo que es importante tener las condiciones ambientales ideales dentro de los laboratorios.
El objetivo del reto es habilitar una plataforma web que le permita a los encargados de cada laboratorio monitorear el ambiente del mismo y con ello actuar para mantener las condiciones ideales. Por lo tanto, deberás reproducir la página web descrita en la sección de diseño.

### 1. ASPECTOS TÉCNICOS A TOMAR EN CUENTA
Diseño: El diseño deberá ser Responsive y deberá usar media querys durante el desarrollo. La página deberá contener secciones principales como un header estático, scroll en la página principal, un router entre secciones que modifiquen el dns agregándose una sub-pagina, así como un footer.
JS Frameworks: Es recomendado usar algún tipo de framework para reducir los tiempos de desarrollo del Proyecto.
Deploy: Deberá montarse un hosting por medio de Firebase.
Librerías a usar: Todas las librerías usadas deberán ser instaladas apropiadamente mediante NPM.
Control de versiones: Se deberá usar git como su controlador de versiones y además este deberá tener los diferentes branches necesarios para un desarrollo en producción.
### 2. DISEÑO
• CSS Framework: Se podrán utilizar librerías tales como: Bootstrap y/o Materialize

• Mockup: https://xd.adobe.com/view/facb9c77-92f2-40e8-6a93-ce32e0879894-8cfa/

• Fuente: Source Sans Pro

• Icons: Glyphicons

• Assets:https://drive.google.com/open?id=1dapki1EPERPjz_JxKpIE949o2clV1MqQ

• Style Guide: https://drive.google.com/open?id=1v9s6fE8u-bGcKo4we391OjA_f-jJiH9E 

### 3. CASOS DE USO
• En el Appbar el usuario podrá.

• Ver el nombre de usuario en sesión.

• Ver si tiene notificaciones pendientes, según los valores máximos y mínimos descritos más adelante.

• En el cuerpo de la página, el usuario podrá:
• Establecer y modificar los máximos y mínimos de los valores de cada sensor: Los valores a manejar para cada sensor son:
Temperatura Humedad Ruido Luminosidad Max 30 °C 20% TBD db 500 lx Min 10 °C 40% TBD db 100 lx

• Ver en tiempo real las mediciones de cada sensor

• Indicar con una leyenda lo siguiente:
• Normal: la medición se encuentra dentro del rango deseado
• Advertencia: la medición se encuentra 5% próximo a alcanzar un
valor máximo o un mínimo de un sensor determinado
• Crítico: la medición está por debajo del valor mínimo o por arriba del valor máximo.

• Mostrar histórico de cada uno de los sensores o mostrar una gráfica por cada uno de los sensores o poder filtrar por rango de fecha (solo los últimos 6 días). Para esto se habilitó un
endpoint para obtener los datos de un XDK. Estos se pueden obtener de 3 formas:

https://connectorysolutions.com/talentfest/data/
Devolverá en formato JSON los datos de las últimas 24 horas.

 https://connectorysolutions.com/talentfest/data/{fecha-inicio}/
Devolverá en formato JSON los datos desde {fecha-inicio} hasta la hora actual.

https://connectorysolutions.com/talentfest/data/{fecha-inicio}/{fecha-final}/
Devolverá en formato JSON los datos entre las fechas especificadas.

#### Notas:
• {fecha-inicio} y {fecha-final} son fechas en el siguiente formato: YYYY-MM-DD HH:MM:SS y la zona horaria es UTC.

• La menor {fecha-inicio} permitida es 2018-09-04 22:00:00

• La mayor {fecha-final} permitida es aquella en que se procese la petición en el back-end.

• El JSON a regresar tendrá la siguiente estructura:
[ {
"temperature": "27.470",
"pressure": “84135”,
"humidity": “51”,
"illumination": "452.160",
Noise Sensor
Illuminance Sensor
"noise": "234.00",
"time_measurement": "2018-09-03T17:28:43.895Z",
"FK_xdk_serial": "7"
}]

• Ejemplo: https://connectorysolutions.com/talentfest/data/2018-09-04 22:00:00/2018-09-05 22:00:00

• En el pie de la página, deberá mostrar:
Iconos a las redes sociales y páginas oficiales de Bosch México.