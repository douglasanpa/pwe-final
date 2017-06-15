name := """PWE-final"""
organization := "douglas.leandro.ifspguarulhos.edu.br"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.11"

libraryDependencies += filters
