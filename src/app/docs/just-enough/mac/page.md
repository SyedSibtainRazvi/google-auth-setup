---
title: Just enough Mac
nextjs:
  metadata:
    title: Just enough Mac
    description: Just enough Mac
---

**[Intended for OSX first-timers]**

If you have been given a new Mac and are new to it, here is a helpful writeup of things to use/install:



#### Apple ID and iCloud

During the setup process and first boot, Apple usually asks for a Apple ID. If you've skipped setting up an Apple ID, do it at [developer.apple.com](https://developer.apple.com/register/index.action). This can be used for both iCloud and for purchasing apps on the App Store. *You don't need a credit card for this step*.

#### Tooling

Xcode is a program by Apple that has compilers and the SDKs to work with iOS apps. This is a ~1.5GB download and most of the time, we won't need the iOS SDKs and emulators. The fruit of [this project](http://kennethreitz.org/xcode-gcc-and-homebrew/), Apple has started releasing packages that contain just the compilers and command line tools. Xcode or Command-Line tools bundle, choice is yours.


#### Installing Xcode

This is fairly straight forward. Open the Mac App Store and search for Xcode.

#### Command-Line tools bundle by Apple

In the developer.apple.com portal, in the [downloads](https://developer.apple.com/downloads/index.action) section, find the "Command Line Tools (OSX <Your OS version>) for Xcode - <Time when this was released>" suitable for the OS version on your machine. The OS version can be seen at Apple Icon (top-left of screen) > About This Mac.

* 10.9 is called "Mavericks"
* 10.8 is called "Mountain Lion"
* 10.7 is called "Lion"

Install the command line tools that you've downloaded.

#### Via Homebrew

Homebrew is Mac's package management program. (Check the next section)

Homebrew provides options to [install custom versions of GCC](https://github.com/mxcl/homebrew/wiki/Custom-GCC-and-cross-compilers). However, as noted in the above link, it is the least preferable way to install compilers and should be the last resort or a special case.

#### Homebrew

Homebrew is the OSX's version of `yum`, `apt` package managers that you might find on other Linux flavours.

[GitHub page for Homebrew](https://github.com/mxcl/homebrew) has the source and the installation instructions for installing it. `brew` is the command line executable.

After the installation, run `brew doctor` in your terminal to see if everything works. All the packages that you install further are stored under `/usr/local` directory automatically. This is the time to check if your `PATH` is configured properly (the `/usr/local` directory should be before `/usr/bin`)

#### Git

Install git via `brew install git`

#### Rubies

1. Install chruby[/rbenv/rvm]
2. Install a ruby version.


#### Keyboard shortcuts and window management

If you're an avid keyboard user, assigning keyboard shortcuts for various OSX native functions is present under System Preferences > Keyboard.

Mac has a native app launcher in the form of spotlight (It also searches for files). Command + Space is the keybinding for opening it up. Oh! Command is the <kbd>⌘</kbd> button.

For advanced tiling window management functions, try out [Slate](https://github.com/jigish/slate).

Some useful shortcuts (default ones):

* Command + Shift + 4 saves the selection to a file on Desktop
* Control + Command + Shift + 4 saves the selection to clipboard.

##### Tips

* [How to assign keyboard shortcuts to start Applications(Terminal,Browser,HipChat, etc)](http://mac.tutsplus.com/tutorials/tips-shortcuts/how-to-launch-any-app-with-a-keyboard-shortcut/)

* Big productivity boost awaits if you get yourself used to the multitouch trackpad gestures. [Easily switch windows, read notifications and do much more by swiping your fingers](http://support.apple.com/kb/ht4721) .
