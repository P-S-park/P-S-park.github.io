<template>
  <v-card>
    <v-card-title>
      Почтовая рассылка
    </v-card-title>
    <v-card-text>
      <p>Только важные объявления о происходящем в парке. Оставьте ваш e-mail:</p>
      <v-form method="POST" ref="form" action="https://pspark.us14.list-manage.com/subscribe/post?u=b89d49c61ddfef92f105bad7f&amp;id=3599873c34">
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              label="Эл. почта"
              dense
              solo
              type="email"
              name="EMAIL"
              outlined
              :rules="rules"
              v-model="email"
            />
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b89d49c61ddfef92f105bad7f_3599873c34" tabindex="-1" value=""></div>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn class="mt-1" color="primary" @click="subscribe" type="submit" name="subscribe" :disabled="!isValid">Получать</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiEmail } from '@mdi/js';
export default {
  data: () => ({
    email: '',
    mdiEmail,
    rules: [
      value => !!value || 'обязательное',
      value => (value || '').length <= 120 || 'Не длиннее 120 символов',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Неправильный адрес эл. почты'
      },
    ],
  }),

  computed: {
    isValid() {
      return this.rules.every(f => true === f(this.email));
    },
  },

  methods: {
    subscribe(event) {
      const result = this.$refs.form.validate();
      if (!result) {
        event.stopPropagation();
        event.preventDefault();
      }

      console.log("Lets subscribe!", result, this.email);
    },
  },
}
</script>
