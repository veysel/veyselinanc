---
layout: post
title:  "Dotnet Core 3 and Python 3 Comparison Of Http Request and Json Parse"
date:   2019-12-03 22:12:45 +0300
categories: comparison
---

Hello, in this article I'll show you a comparison of the http and json modules commonly used in the dotnet core and python programming languages.

<br>

### Project Source Code
* [dino](https://github.com/veysel/dino)

<br>

### Products System Features And Modules
* Dotnet Core : .NET Core 3.0.101
* Python : Python 3.6.8
* Windows : Windows 10 (1909)
* Linux : Elementary OS (5.0)

* Dotnet Core Http Module : [System.Net.Http](https://github.com/dotnet/corefx/tree/master/src/System.Net.Http)
* Dotnet Core Json Module : [Jil](https://github.com/kevin-montrose/Jil)
* Python Http Module : [requests](https://github.com/psf/requests)
* Python Json Module : [json](https://github.com/python/cpython/tree/master/Lib/json)

<br>

### Note
> In both programming languages, cache settings are left by default.

> The procedures were repeated 100 times to find the average time.

> gundem.json file size 4.03 MB

<br>

### Source Of Motivation
* Teknoseyir ([teknoseyir.com](https://www.teknoseyir.com))
* 80000 lines of json data ([gundem.json](https://raw.githubusercontent.com/tsopenteam/gundem/master/gundem.json))
* Bless Your Soul ([Bless Your Soul by The Bones of J.R. Jones](https://listen.tidal.com/album/58301107/track/58301111))

<br>

### Windows - Internet Download Speed : 8 Mbps

|                               | Dotnet Core (sec.) | Python (sec.)  |
|:----------------------------- |:------------------:|:--------------:|
| **Http First Request Time**   | 3.69863            | 2.87556        |
| **Json First Parse Time**     | 0.09178            | 0.03590        |
|                               |                    |                |
| **Http Average Request Time** | 3.25506            | 1.25587        |
| **Json Average Parse Time**   | 0.08062            | 0.05479        |

<br>

### Linux - Internet Download Speed : 8 Mbps

|                               | Dotnet Core (sec.) | Python (sec.)  |
|:----------------------------- |:------------------:|:--------------:|
| **Http First Request Time**   | 3.70896            | 1.80764        |
| **Json First Parse Time**     | 0.07619            | 0.04377        |
|                               |                    |                |
| **Http Average Request Time** | 3.27412            | 1.07412        |
| **Json Average Parse Time**   | 0.07755            | 0.05438        |

<br>

### Windows - Internet Download Speed : 80 Mbps

|                               | Dotnet Core (sec.) | Python (sec.)  |
|:----------------------------- |:------------------:|:--------------:|
| **Http First Request Time**   | 1.27413            | 1.40607        |
| **Json First Parse Time**     | 0.08275            | 0.03597        |
|                               |                    |                |
| **Http Average Request Time** | 0.42018            | 0.64788        |
| **Json Average Parse Time**   | 0.07664            | 0.04543        |

<br>

### Linux - Internet Download Speed : 80 Mbps

|                               | Dotnet Core (sec.) | Python (sec.)  |
|:----------------------------- |:------------------:|:--------------:|
| **Http First Request Time**   | 1.54944            | 1.59313        |
| **Json First Parse Time**     | 0.08650            | 0.05000        |
|                               |                    |                |
| **Http Average Request Time** | 0.46743            | 0.67746        |
| **Json Average Parse Time**   | 0.08146            | 0.04252        |