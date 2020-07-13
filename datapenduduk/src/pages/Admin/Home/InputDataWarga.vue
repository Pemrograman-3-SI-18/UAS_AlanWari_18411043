<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-5">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h6 text-weight-light q-pa-md">
        <span class="text-blue">Tambah Data Warga</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="NIK"
            lazy-rules
            color="teal"
            v-model="nik"
            :rules="[
           val => val !== null && val !== '' || 'Masukkan NIK Anda!!'
           ]">
            <template v-slot:append>
              <q-icon name="perm_contact_calendar"/>
            </template>
          </q-input>

          <q-input
            label="No KK"
            lazy-rules
            color="teal"
            v-model="noKk"
            :rules="[
           val => val !== null && val !== '' || 'Masukkan No KK Anda!!'
           ]">
            <template v-slot:append>
              <q-icon name="perm_contact_calendar"/>
            </template>
          </q-input>

          <q-input
            label="Nama Lengkap"
            lazy-rules
            color="teal"
            v-model="namaLengkap"
            :rules="[
           val => val !== null && val !== '' || 'Masukkan Nama Lengkap!!'
           ]">
            <template v-slot:append>
              <q-icon name="perm_identity"/>
            </template>
          </q-input>

          <q-input
            label="Alamat"
            lazy-rules
            color="teal"
            v-model="alamat"
            :rules="[
           val => val !== null && val !== '' || 'Masukkan Alamat Lengkap!!'
           ]">
            <template v-slot:append>
              <q-icon name="account_balance"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Kelamin"
            lazy-rules
            color="teal"
            v-model="jenisKelamin"
            :rules="[
           val => val !== null && val !== '' || 'Masukkan Jenis Kelamin Anda!!'
           ]">
            <template v-slot:append>
              <q-icon name="accessibility"/>
            </template>
          </q-input>

          <q-input
            label="Agama"
            lazy-rules
            color="teal"
            v-model="agama"
            :rules="[
           val => val !== null && val !== '' || 'Masukkan Agama Anda!!'
           ]">
            <template v-slot:append>
              <q-icon name="cached"/>
            </template>
          </q-input>

          <q-input
            label="No Telepon"
            lazy-rules
            color="teal"
            v-model="noTelepon"
            :rules="[
           val => val !== null && val !== '' || 'Masukkan No Telepon Anda!!'
           ]">
            <template v-slot:append>
              <q-icon name="settings_phone"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Warga"
              style="height: 40px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      nik: null,
      noKk: null,
      namaLengkap: null,
      alamat: null,
      jenisKelamin: null,
      agama: null,
      noTelepon: null
    }
  }
}
</script>

<style scoped>

</style>
