# Database Manager CLI

Easy Manage Local or Remote Database by CLI Command.

## Database Support
| Name    | Support | Status      |
| ------- | ------- | ----------- |
| MySQL   | yes     | in progress |
| MariaDB | yes     | in progress |
| MongoDB | -       | to do       |

## Feature List
### MySQL or MariaDB
| Name                 | Status |
| -------------------- | ------ |
| Add Server           | Yes    |
| List User            | -      |
| Create New User      | -      |
| Update Password User | -      |
| Delete User          | -      |
| Add New Database     | -      |
| Delete Database      | -      |

## Installation Instruction
### MySQL
- CentOS 7
- Debian 10

# Notes :
- All tutorial has been testing before update

# Install Using CentminMOD

```
yum -y update; curl -O https://centminmod.com/betainstaller73.sh && chmod 0700 betainstaller73.sh && bash betainstaller73.sh
```

## Switch Off Other Apps
- If you need only MySQL or MariaDB database, then you can swtich off other apps with this command :
```bash
service nginx stop
service php-fpm stop
service pure-ftpd stop
service memcached stop
chkconfig nginx off
chkconfig php-fpm off
chkconfig pure-ftpd off
chkconfig memcached off
```

- If you use them back, then run this command :
```bash
service nginx start
chkconfig nginx on
```

Ref: https://community.centminmod.com/threads/mysql-only-installation.15165/

# Other Reference
Reference: 
- https://devconnected.com/how-to-install-and-enable-ssh-server-on-debian-10/