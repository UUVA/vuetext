<template>
    <h3>插槽3再续</h3>
    <slot name="headerer" :msg="childMsg"></slot>
    <slot name="mainin" :job="jobMsg"></slot>
    <hr>
</template>

<script>
export default {
    name: 'slotszaixu',
    data() {
        return {
            childMsg: '插槽3再续子标题',
            jobMsg: '插槽3再续子内容'
        }
    }
} 
</script>