---
layout:		post
title:  	"grub 2 配置"
category: 	grub2
tags:		[grub2]
---

### 修改grub2等待时间
> sudo gedit /etc/default/grub

	GRUB_TIMEOUT=3
	
> sudo update-grub

### 修复
```
sudo su
fdisk -l
mount /dev/sda9 /mnt
mount /dev/sda1 /mnt/boot
mount /dev/sda10 /mnt/home

mount --bind /dev /mnt/dev
mount --bind /proc /mnt/proc

chroot /mnt

sudo grub-install /dev/sda
sudo update-grub
```
没有windws 先进入系统后再执行一次
```
sudo update-grub
```

