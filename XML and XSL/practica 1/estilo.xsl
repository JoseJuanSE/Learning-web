<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
    <head>
      <style>
      th{
        color: #00308F;
      }
      table {
      	border: 5px solid black;
        padding: 10px;
      }
      </style>
  	</head>
    <body>
      <table>
        <caption style="text-align:center;color:white;font-size:24px;background-color: #00308F;">Catalogo de medicamentos</caption>
        <tr> 
          <xsl:for-each select="farmacia/medicamento">
            <th style="color: black; font-weight:bold; text-align: center; font-size: 20px; background-color: #7CB9E8;"><xsl:value-of select="nombre"/></th> 
          </xsl:for-each>
        </tr>
        <tr> 
          <xsl:for-each select="farmacia/medicamento">
            <th><xsl:value-of select="via_administracion"/></th> 
          </xsl:for-each>
        </tr>
        <tr> 
          <xsl:for-each select="farmacia/medicamento">
            <th><xsl:value-of select="contenido"/></th> 
          </xsl:for-each>
        </tr>
        <tr> 
          <xsl:for-each select="farmacia/medicamento">
            <th><xsl:value-of select="precio"/></th> 
          </xsl:for-each>
        </tr>
      </table>
			<br/>
      <!-- <table>
      	<caption style="text-align:center;color:white;font-size:24px;background-color: #00308F;">Medicamentos que cuestan mas de 100</caption>
        <tr> 
          <xsl:for-each select="farmacia/medicamento">
            <xsl:if test="precio > 100">
              <th style="color: black; font-weight:bold; text-align: center; font-size: 20px; background-color: #7CB9E8;"><xsl:value-of select="nombre"/></th> 
            </xsl:if>
          </xsl:for-each>
        </tr>
        <tr> 
          <xsl:for-each select="farmacia/medicamento">
            <xsl:if test ="precio > 100">
            	<th><xsl:value-of select="via_administracion"/></th> 
            </xsl:if>
          </xsl:for-each>
        </tr>
        <tr > 
          <xsl:for-each select="farmacia/medicamento">
            <xsl:if test ="precio > 100">
              <th><xsl:value-of select="contenido"/></th>   
              </xsl:if>
          </xsl:for-each>
        </tr>
        <tr > 
          <xsl:for-each select="farmacia/medicamento">
            <xsl:if test ="precio > 100">
              <th style="color:red"><xsl:value-of select="precio"/></th>
              </xsl:if>
          </xsl:for-each>
        </tr>
      </table> -->
			<br/>
      <!-- <table>
			<caption style="text-align:center;color:white;font-size:24px;background-color: #00308F;">Medicamentos en capsula (verde) o comprimidos (morado)</caption>
      
      <tr style="bgcolor=#7CB9E8 font-size:20px;"> 
        <xsl:for-each select="farmacia/medicamento">
          <xsl:sort select="contenido"/>
          <xsl:choose>
            <xsl:when test="@categoria = 'Capsula'" >
          		<th style="color: black; font-weight:bold; text-align: center; font-size: 20px; background-color: #008f39;"><xsl:value-of select="nombre"/></th> 
            </xsl:when>
            <xsl:when test="@categoria = 'Comprimido'" >
          		<th style="color: black; font-weight:bold; text-align: center; font-size: 20px; background-color: #572364;"><xsl:value-of select="nombre"/></th>
            </xsl:when>
          </xsl:choose>
        </xsl:for-each>
      </tr>
      <tr> 
        <xsl:for-each select="farmacia/medicamento"> 
          <xsl:sort select="contenido"/>
          <xsl:choose>
            <xsl:when test="@categoria != 'Jarabe'" >
         			<th><xsl:value-of select="via_administracion"/></th> 
            </xsl:when>
          </xsl:choose>
        </xsl:for-each>
      </tr>
      <tr> 
        <xsl:for-each select="farmacia/medicamento">
          <xsl:sort select="contenido"/> 
          <xsl:choose>
            <xsl:when test="@categoria != 'Jarabe'" >
         			<th><xsl:value-of select="contenido"/></th> 
            </xsl:when>
          </xsl:choose>
        </xsl:for-each>
      </tr>
      <tr> 
        <xsl:for-each select="farmacia/medicamento">  
          <xsl:sort select="contenido"/>    
          <xsl:choose>
            <xsl:when test="@categoria != 'Jarabe'" >
         			<th style="color:red"><xsl:value-of select="precio"/></th>
            </xsl:when>
          </xsl:choose>
        </xsl:for-each>
      </tr>
    </table> -->
      

    </body>
  </html>
</xsl:template>
</xsl:stylesheet>