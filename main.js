let cake = new Vue({
  el: '#myCake',
  data: {
    layers: [],
    layersTypes: {
      biscuit: {
        price1sm: 50,
        label: 'Бісквит'
      },
      beze: {
        price1sm: 100,
        label: 'Безе'
      },
      curd: {
        price1sm: 60,
        label: 'Сирний'
      }
    },
    defaultLayerType: 'biscuit',
    defaultHeight: 4
  },
  computed: {
    total() {
      let sum = 0;
      this.layers.forEach(
        (layer) => {
          sum += layer.height * this.layersTypes[layer.type].price1sm;
        }
      )
      return sum;
    }
  },
  methods: {
    addLayer() {
      this.layers.push({
        type: this.defaultLayerType,
        height: this.defaultHeight
      });
    },
    changeHeight(i, dh) {
      this.layers[i].height += dh;
    },
    deleteLayer(i) {
      this.layers.splice(i, 1);
    }
  }
})