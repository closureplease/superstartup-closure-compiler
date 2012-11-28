# Superstartup Custom Closure Compiler

A custom build of [Google Closure Compiler](https://developers.google.com/closure/compiler/) that will strip out all `goog.debug` calls, and more specifically logging.

## Instructions

You can find the pre-built custom compiler in `superstartup-compiler/build/sscompiler.jar` or you can build your own following these instructions:

1. Fetch the submodule (actual closure compiler sources):
```shell
    git submodule init
    git submodule update
```

2. Optionally, you may want to update the compiler sources to the latest version. You need to add Adinardi's repo as the upstream, it is an svn mirror that updates every hour:
```shell
    cd google-closure-compiler
    git remote add upstream git://github.com/adinardi/google-closure-compiler.git
    git fetch upstream
    git rebase upstream/master
```

3. Build closure compiler with [ant](http://ant.apache.org/). At the root of closure's compiler source tree, there is an Ant file named `build.xml`. To use it, navigate to the same directory and type the command:
```shell
    ant jar
```

    This will produce a jar file called "build/compiler.jar".

4. Now time to build the custom compiler, move to the `superstartup-compiler` directory and issue the same build command:
```shell
    cd superstartup-compiler
    ant jar
```

    After the build is successful, you can find the jar file in the `build` folder.

If you are having problems with `ant jar` or the build produces errors, try a `ant clean` first.