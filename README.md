Ce prototype a été fait avec notre formateur backend Java Spring, le but de celui-ci était de créer une application, selon certaines contraintes et logiques métier, en couches séparées sous forme de micro-services via Docker.
  - msPatient ; permet à l'utilisateur (un médecin) d'enregistrer les patients.
  - msNote ; lui permet d'enregistrer des notes sur ses patients.
  - msScore ; en fonction des données démographiques du patient (msPatient) et de mots clés enregistrées dans ses notes (msNote), ce microservice doit calculer le niveau de risque au diabète d'un patient.

Pour le frontend nous devions utiliser Thymeleaf. Cependant, j'ai choisi avec l'accord de mon formateur d'utiliser Angular et TS.

_________________________________________________________________________________________________________________________________________________________________________________________________________________________________


This prototype was created using our Java Spring backend trainer. The goal was to create an application, based on certain constraints and business logic, in separate layers as microservices via Docker.
  - msPatient: allows the user (a doctor) to register patients.
  - msNote: allows the user to record notes about their patients.
  - msScore: based on the patient's demographic data (msPatient) and keywords recorded in their notes (msNote), this microservice calculates a patient's diabetes risk level.

For the frontend, we were supposed to use Thymeleaf. However, with my trainer's approval, I chose to use Angular and TS.
