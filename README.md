# 🧪 Automated Testing w/ Cypress of Sauce Demo Website
This project created for fulfilling midsemester assignment of Pengujian Perangkat Lunak lecture. The task is to make a team project to implement [test cases](https://docs.google.com/document/d/1Klhb9lfYU7glFe1-4cyGa43v_rScjAQVu8LRfl8A2gw/edit?usp=sharing) of [Sauce Demo Website](https://www.saucedemo.com/), a simple E-Commerce static website that sells SWAGs for Programmers.

<p align="center">
  <img width="300" src="https://www.saucedemo.com/static/media/Login_Bot_graphic.20658452.png">
</p>

## 👥 The Team
There are 5 persons from **Kelompok 1 TI-3D** involved in this project, consists of:
- I Made Genadi Dharma Slawa(1941720070)
- Khosy Robbin Hood(1941720067)
- Muhammad Ridho Ramadhan(1941720149)
- Reynaldi Ramadhani Eka Purnomo(1941720142)
- Rizkina Hayyuni Putri(1941720008)

## ⚙️ Installation
The following are step by step to install and run the project on your local machine.
### Pre-requisites
- [Git](https://git-scm.com/downloads)
- [Node JS](https://nodejs.org/en/)
### Clone The Repository
``` bash 
git clone https://github.com/Muhammad-Ridho/PPL_UTS1.git
```
### Install the Cypress modules
Windows
``` bash
.\node_modules\.bin\cypress.cmd install --force
```
### Run the Cypress Runner
``` bash
npx cypress open
```

## 📝 Test Cases
Here are the test cases in Bahasa Indonesia
|       **Scenario**      |                                                 **Test Case**                                                |                                                                                             **Test Steps**                                                                                             |                                    **Test Data**                                   |                                                  **Expected Result**                                                  |
|:-----------------------:|:------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|
| Login                   | Masukan Username dan Password yang valid                                                                     | 1. Masukan Valid Username <br> 2. Masukan Valid Password <br> 3. Klik tombol Login                                                                                                                     | Valid Username <br> Valid Password                                                 | Login sukses dan diarahkan ke halaman Menu                                                                            |
| Login                   | Masukan valid Username dan invalid Password                                                                  | 1. Masukan Valid Username <br> 2. Masukan Invalid Password <br> 3. Klik tombol Login                                                                                                                   | Valid Username <br> Invalid Password                                               | Mendapatkan pesan “Username and password do not match any user in this service”                                       |
| Login                   | Masukan Invalid  Username dan valid Password                                                                 | 1. Masukan Invalid Username <br> 2. Masukan Valid Password <br> 3. Klik tombol Login                                                                                                                   | Invalid Username <br> Valid Password                                               | Mendapatkan pesan “Username and password do not match any user in this service”                                       |
| Login                   | Masukan Username dan Password yang invalid                                                                   | 1. Masukan Invalid Username <br> 2. Masukan Invalid Password <br> 3. Klik tombol Login                                                                                                                 | Invalid Username <br> Invalid Password                                             | Mendapatkan pesan “Username and password do not match any user in this service”                                       |
| Login                   | Masukan Username dan Password yang telah dikunci                                                             | 1. Masukan Locked Username <br> 2. Masukan Valid Password <br> 3. Klik tombol Login                                                                                                                    | Locked Username <br> Valid Password                                                | Mendapatkan pesan ”Sorry, this user has been locked out.”                                                             |
| Login                   | Masukan Username dan Password yang bermasalah                                                                | 1. Masukan Problem Username <br> 2. Masukan Valid Password <br> 3. Klik tombol Login                                                                                                                   | Valid Username <br> Valid Password                                                 | Login sukses dan diarahkan ke halaman Menu                                                                            |
| Remove barang dari Cart | Masukan 1 barang ke Cart lalu Hapus 1 barang dari Cart                                                       | 1. Klik tombol Add pada item  “Sauce Lab Backpack” ke Cart <br> 2. Klik tombol Remove pada item “Sauce Lab Backpack”                                                                                   | Item barang “Sauce Lab Backpack”                                                   | Tombol “Remove” berubah menjadi “Add to Cart”                                                                         |
| Remove barang dari Cart | Masukan 1 barang ke Cart lalu Masuk ke halaman detail barang lalu Hapus 1 barang dari Cart di halaman detail | 1. Klik tombol Add pada item  “Sauce Lab Backpack” ke Cart <br> 2. Klik item “Sauce Lab Backpack” sehingga masuk ke halaman detail <br> 3. Klik tombol Remove pada halaman detail “Sauce Lab Backpack” | Item barang “Sauce Lab Backpack”                                                   | Tombol “Remove” berubah menjadi “Add to Cart”                                                                         |
| Remove barang dari Cart | Masukan 1 barang ke Cart lalu Hapus 1 barang dari Cart lewat halaman Cart                                    | 1. Add “Sauce Lab Backpack” ke Cart <br> 2. Buka halaman Cart <br> 3. Remove “Sauce Lab Backpack” dari Cart                                                                                            | Item barang “Sauce Lab Backpack”                                                   | Notification Badge pada Cart tidak tersedia                                                                           |
| Remove barang dari Cart | Masukan 2 barang ke Cart lalu Hapus 1 barang dari Cart  lewat halaman Cart                                   | 1. Add “Sauce Lab Backpack” ke Cart <br> 2. Add “Sauce Labs Onesie” ke Cart <br> 3. Buka halaman Cart <br> 4. Remove “Sauce Lab Backpack” dari Cart                                                    | Item barang “Sauce Lab Backpack” <br> Item barang “Sauce Labs Onesie”              | Tersisa hanya item “Sauce Lab Backpack” di halaman Cart                                                               |
| Remove barang dari Cart | Masukan 2 barang ke Cart lalu Hapus 2 barang dari Cart lewat halaman Cart                                    | 1. Add “Sauce Lab Backpack” ke Cart <br> 2. Add “Sauce Labs Onesie” ke Cart <br> 3. Buka halaman Cart <br> 4. Remove “Sauce Lab Backpack” dari Cart <br> 5. Remove “Sauce Labs Onesie” dari Cart       | Item barang “Sauce Lab Backpack” <br> Item barang “Sauce Labs Onesie”              | Notification Badge pada Cart tidak tersedia                                                                           |
| Add Barang ke Chart     | Pilih 1 barang di menu langsung                                                                              | 1. Klik tombol “Add To Chart” pada menu Sauce Lab Bike Light                                                                                                                                           | Data menu Sauce Lab Bike Light terkirim ke Chart                                   | Data Sauce Lab Bike Light tampil di Chart                                                                             |
| Add Barang ke Chart     | Pilih 1 barang di menu langsung                                                                              | 1. Klik tombol “Add To Chart” pada menu Sauce Labs Onesie                                                                                                                                              | Data menu Sauce Labs Onesie terkirim ke Chart                                      | Data Sauce Labs Onesie tampil di Chart                                                                                |
| Add Barang ke Chart     | Pilih 2 barang di menu langsung                                                                              | 1. Klik tombol “Add To Chart” pada menu Sauce Labs Fleece Jacket <br> 2. Klik tombol "Add To Chart" pada Sauce Labs Bolt T-Shirt                                                                       | Data menu Sauce Labs Fleece Jacket  dan  Sauce Labs Bolt T-Shirt terkirim ke Chart | Data Sauce Labs Fleece Jacket dan Sauce Labs Bolt T-Shirt tampil di Chart                                             |
| Add Barang ke Chart     | Pilih salah menu untuk menampilkan barang                                                                    | 1. Klik tombol “Add To Chart” pada menu Sauce Labs Onesie                                                                                                                                              | Data menu Sauce Labs Onesie terkirim ke Chart                                      | Data Sauce Labs Onesie tampil di Chart                                                                                |
| Add Barang ke Chart     | Pilih salah menu untuk menampilkan barang                                                                    | 1. Klik tombol “Add To Chart” pada menu Sauce Lab Bike Light                                                                                                                                           | Data menu Sauce Lab Bike Light terkirim ke Chart                                   | Data Sauce Lab Bike Light tampil di Chart                                                                             |
| Filter Barang           | Filter dengan Name(A to Z)                                                                                   | 1. Klik dropdown filter pilih Name (A to Z)                                                                                                                                                            | Opsi dari fitur Filter                                                             | Menampilkan seluruh barang terurut berdasarkan nama dari abjad A hingga Z                                             |
| Filter Barang           | Filter dengan Name(Z to A)                                                                                   | 1. Klik dropdown filter pilih Name (Z to A)                                                                                                                                                            | Opsi dari fitur Filter                                                             | Menampilkan seluruh barang terurut berdasarkan nama dari abjad Z hingga A                                             |
| Filter Barang           | Filter dengan Price(low to High)                                                                             | 1. Klik dropdown filter pilih Price (low to high)                                                                                                                                                      | Opsi dari fitur Filter                                                             | Menampilkan seluruh barang terurut berdasarkan harga dari termurah hingga termahal                                    |
| Filter Barang           | Filter dengan Price(High to Low)                                                                             | 1. Klik dropdown filter pilih Price (high to low)                                                                                                                                                      | Opsi dari fitur Filter                                                             | Menampilkan seluruh barang terurut berdasarkan harga dari termahal hingga  termurah                                   |
| Filter Barang           | Filter dengan Price(Z to A) dan Masukkan 1 batang ke cart                                                    | 1. Klik dropdown filter pilih Name (Z to A) <br> 2. Add “Sauce Labs Onesie” ke cart                                                                                                                    | Opsi dari fitur Filter dan item barang “Sauce Labs Onesie”                         | Menampilkan seluruh barang terurut berdasarkan nama dari abjad Z hingga A dan Notification Badge pada Card tertulis 1 |
| Checkout                | Checkout Ada Barang                                                                                          | 1.Klik Checkout jika barang sudah dipilih <br> 2.Mengisi FirstName <br> 3.Mengisi LastName <br> 4.Mengisi Zip/Postal Code <br> 5.Klik Tombol Finish                                                    | <FirstName terisi> <br> <LastName terisi> <br> <Zip/Postal Code terisi>            | Menampilkan Halaman “Thank You your Order”                                                                            |
| Checkout                | Checkout Tanpa Barang                                                                                        | 1.Klik Checkout jika barang sudah dipilih <br> 2.Mengisi FirstName <br> 3.Mengisi LastName <br> 4.Mengisi Zip/Postal Code <br> 5.Klik Tombol Finish                                                    | <FirstName terisi> <br> <LastName terisi> <br> <Zip/Postal Code terisi>            | Menampilkan Notifikasi atau pesan jika cart dalam keadaan kosong                                                      |
| Checkout                | Mengisi Semua Data Sebelum Checkout                                                                          | 1.Klik Checkout jika barang sudah dipilih <br> 2.Mengisi FirstName <br> 3.Mengisi LastName <br> 4.Mengisi Zip/Postal Code                                                                              | <FirstName terisi> <br> <LastName terisi> <br> <Zip/Postal Code terisi>            | Menampilkan Halaman Overview sebelum konfirmasi Checkout                                                              |
| Checkout                | Hanya Mengisi First Name dan Last Name saat Checkout                                                         | 1.Klik Checkout jika barang sudah dipilih <br> 2.Mengisi FirstName <br> 3.Mengisi LastName <br> 4.Mengisi Zip/Postal Code                                                                              | <FirstName terisi> <br> <LastName terisi> <br> <Zip/Postal Code null>              | Menampilkan Pesan Error Jika inputan zip masih kosong dan tetap di halaman tersebut                                   |
| Checkout                | Hanya Mengisi FirstName dan ZIP/Postal Code                                                                  | 1.Klik Checkout jika barang sudah dipilih <br> 2.Mengisi FirstName <br> 3.Mengisi LastName <br> 4.Mengisi Zip/Postal Code                                                                              | <FirstName terisi> <br> <LastName null> <br> <Zip/Postal Code terisi>              | Menampilkan error jika last name belum terisi atau masih kosong                                                       |