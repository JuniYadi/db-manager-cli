# MySQL 5.7 in Centos 7

## Step 1 - Update System

```bash
yum update
```

## Step 2 - Added Repository MySQL

```bash
yum localinstall https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
yum update -y
```

## Step 3 - Install MySQL

```bash
yum install mysql-community-server
```

## Step 4 - Check Status

```bash
systemctl start mysqld
systemctl status mysqld
```

* Output :

```bash
$ systemctl start mysqld
$ systemctl status mysqld
● mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2019-12-01 14:57:30 EST; 7s ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
  Process: 13133 ExecStart=/usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid $MYSQLD_OPTS (code=exited, status=0/SUCCESS)
  Process: 13084 ExecStartPre=/usr/bin/mysqld_pre_systemd (code=exited, status=0/SUCCESS)
 Main PID: 13136 (mysqld)
   CGroup: /system.slice/mysqld.service
           └─13136 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid

Dec 01 14:57:27 db-test systemd[1]: Starting MySQL Server...
Dec 01 14:57:30 db-test systemd[1]: Started MySQL Server.
```



## Step 5 - Secure MySQL Installation

### Get MySQL Temporary Password

```bash
grep 'A temporary password' /var/log/mysqld.log |tail -1
```

* Output :

```bash
$ grep 'A temporary password' /var/log/mysqld.log |tail -1
2019-12-01T19:57:28.329282Z 1 [Note] A temporary password is generated for root@localhost: XXXXX
```

* XXXXX &lt;= is you're real password

### Secure MySQL

```bash
mysql_secure_installation
```

* Output :

```bash
$ mysql_secure_installation

Securing the MySQL server deployment.

Enter password for user root: 
The 'validate_password' plugin is installed on the server.
The subsequent steps will run with the existing configuration
of the plugin.
Using existing password for root.

Estimated strength of the password: 100 
Change the password for root ? ((Press y|Y for Yes, any other key for No) : y

New password: 

Re-enter new password: 

Estimated strength of the password: 100 
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
Success.

By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done! 
```

## Step 6 - Testing

```bash
mysql -u root -p
```

* Output :

```bash
$ mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 14
Server version: 5.7.28 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```

