---
layout: post
title:  "Dotnet CLI Kullanımı"
date:   2018-07-06 00:34:14 +0300
categories: dotnet
---

Burada kullanılan dotnet core sürümü 2

<br>

Yeni proje oluşturma

{% highlight shell %}
dotnet new console
dotnet new classlib
dotnet new web
dotnet new mvc
dotnet new webapi
{% endhighlight %}

Projeyi derleme

{% highlight shell %}
dotnet build
{% endhighlight %}

Projeyi çalıştırma

{% highlight shell %}
dotnet run
{% endhighlight %}

Projeyi yayınlama

{% highlight shell %}
dotnet publish
{% endhighlight %}

Test çalıştırma

{% highlight shell %}
dotnet test
{% endhighlight %}

Projeye paket ekleme

{% highlight shell %}
dotnet add package Dapper
{% endhighlight %}

Projeye başka bir projenin referansını ekleme

{% highlight shell %}
dotnet add reference ../OtherProject.csproj
{% endhighlight %}

Proje derleme dosyalarını temizleme

{% highlight shell %}
dotnet clean
{% endhighlight %}