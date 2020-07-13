<template>
  <q-layout class="bg-grey-5" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-5 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">

                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="text-blue-14 text-h5">LOGIN</div>
                  <q-card-section></q-card-section>

                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input
                      filled
                      v-model="form.email"
                      label="Email"
                      hint="Masukan email anda"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Masukan Email Terlebih Dahulu']"
                    />

                    <q-input
                      filled
                      v-model="form.password"
                      label="Password"
                      hint="Masukan password dengan benar"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Masukan Password Terlebih Dahulu']"
                    />
                    <div>

                      <q-btn label="Login" type="submit" color="dark"/>
                      <q-btn label="Registrasi"  type="submit" to="/auth/registrasi" color="dark" flat class="q-ml-sm" />
                    </div>
                  </q-form>
                </div>

                <div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: null,
        password: null
      },

      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/login', {
        email: this.form.email,
        password: this.form.password
      })
        .then((res) => {
          console.log(res)
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            if (res.data.data.role === 1) {
              this.$q.localStorage.set('datauser', res.data.data)
              this.$router.push('/')
            } else {
              this.$q.localStorage.set('datauser', res.data.data)
              this.$router.push('/pengguna')
            }
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
