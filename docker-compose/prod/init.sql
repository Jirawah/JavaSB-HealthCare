CREATE USER 'msuser'@'%' IDENTIFIED BY 'msuserpwd';
GRANT ALL PRIVILEGES ON patientdb.* TO 'msuser'@'%';
FLUSH PRIVILEGES;
