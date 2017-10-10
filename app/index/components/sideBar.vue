<template>
    <div>
        <ul>
            <li v-for="item in items">
                <router-link  :to="item" key="item">{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    var arr = ["temp","Favlist","nextTick","centerAlign"];
    export default{
        data(){
            return {
                items:arr
            }
        }
    }
</script>