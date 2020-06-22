<template>
  <div>
      <b-table
      id="table-transition-example"
      :items="items"
      :fields="fields"
      bordered striped hover 
      small
      primary-key="a"
      :tbody-transition-props="transProps"
      @row-dblclicked="(item, index, event) => dbclickedHandler(item)">
    <template slot="actions" scope="environment">
        <b-btn size="sm" @click="log(environment.item)">Details</b-btn>
    </template>
      </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transProps: {
          // Transition name
          name: 'flip-list'
        },
        items: [
          { a: 2, b: 'Two', c: 'Moose' },
          { a: 1, b: 'Three', c: 'Dog' },
          { a: 3, b: 'Four', c: 'Cat' },
          { a: 4, b: 'One', c: 'Mouse' }
        ],
        fields: [
          { key: 'a', sortable: true },
          { key: 'b', sortable: true },
          { key: 'c', sortable: true }
        ]
      }
    },
    methods: {
        dbclickedHandler(item) {
            //var record = this.items[index]
            console.log(item.a, item.b, item.c)
        }
    }
  }
</script>

<style>
    table#table-transition-example .flip-list-move {
        transition: transform 1s;
    }
</style>