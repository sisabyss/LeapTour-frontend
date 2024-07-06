<template>
    <teleport to="body">
        <div v-if="props.open" class="modal-overlay">
            <div class="modal-content">
                <button class="CloseModal" @click="closeModal">X</button>
                <slot></slot>
            </div>
        </div>
    </teleport>
</template>

<script setup>

const props = defineProps({
    open: {default: false, type: Boolean}
})

const emit = defineEmits(['closeSignFromModal']);

function closeModal() {
    emit("closeSignFromModal")
}

</script>

<style scoped>
.CloseModal {
    margin-right: 50px;
    margin-top: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2em;
    background: none;
    border: none;
    cursor: pointer;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    background-color: white;
    padding: 20px;
    width: 600px;
    transform: scale(0.7);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
