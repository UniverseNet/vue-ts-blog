<template>
    <div>
        <h2>
            Chapter3. Vue Instance
        </h2>
        인스턴스에 대한 고찰

        props, data, computed, method
        여기에 추가로 vuex에서 다루는 state, getters, mutation, action 이녀석들의 역할과 쓰임새를 정확히 하는게 중요하다.
        우선 vuex를 제외한 4가지(props, data, computed, method)에 대해서 알아보자.

        props
        이는 현재의 vue 컴포넌트를 호출하여 화면에 렌더링 되기 이전에 이미 선언되어 사용되고 있는 인스턴스를 선언해주는 역할을 맡고있다.
        물론 이전에 사용되던 컴포넌트에서 해당 컴포넌트에 전달해 준 인스턴스만 제한적으로 선언할수 있다.
        해당 props에는 전달받은 인스턴스명과 해당 인스턴스의 타입을 정의해주면 된다. props에 선언된 인스턴스는 이전 컴포넌트에서 쓰던것처럼 즉각적을 사용할 수 있다.

        data
        현재 컴포넌트에서 사용 될 새로운 인스턴스를 선언해주는 역할을 맡고 있다.
        해당 선언부에서는 이외의 설명할건 없는 듯하다.




        <!-- todo : computed -->
        <!-- todo : method -->
        <!-- todo : method -->
        <!-- todo : state -->
        <!-- todo : getters -->
        <!-- todo : mutation -->
        <!-- todo : action -->


    </div>
</template>
<style scoped>
    div { padding: 1rem; }
    pre code {
        background-color: #eee;
        border: 1px solid #999;
        display: block;
        padding: 20px;
    }
</style>