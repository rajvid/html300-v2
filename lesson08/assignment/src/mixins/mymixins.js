// Creating a mixin to toggle the border class in Image-Comp.vue
export default {
    data() {
        return {
            isActive: true
        }
    },
    created: function() {
        this.toggleShowHide();
    },
    methods: {
        toggleShowHide: function() {
            this.isActive = !this.isActive;
        }
    } 
}