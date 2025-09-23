++

# Title defaults to a title-cased version of the file name

title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = '{{ .Date }}'
description = ''
tags = []
categories = ['Projects']
link = '' # External link (live site / demo). Leave empty if none.
repo = '' # Repository URL if applicable.
image = '' # Relative path to an image (place in same bundle folder) e.g. 'screenshot.png'
weight = 100 # Lower numbers appear first.
draft = true
++

Short summary sentence (1–2 lines). This will appear in cards if you template it.

## Overview

Longer description here. You can add additional sections:

## Stack

- Item 1
- Item 2

## Highlights

1. Achievement one
2. Achievement two

<!-- Add any resources (images) in a page bundle: create folder `projects/your-slug/` with an `index.md` -->
