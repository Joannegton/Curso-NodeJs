


### **Async e await**

O JavaScript é uma linguagem assíncrona, o que significa que as operações podem ser realizadas de forma não sequencial. Para lidar com operações assíncronas, podemos utilizar as palavras-chave `async` e `await` para tornar o código mais legível e fácil de entender.

Por exemplo, ao realizar operações de leitura e escrita em um banco de dados, podemos utilizar funções assíncronas e `await` para aguardar a conclusão da operação antes de prosseguir com o código.

```javascript
async function getUser(id){
    const user = await User.findById(id);
    return user;
};
```

Neste exemplo, a função `getUser` é assíncrona e utiliza `await` para aguardar a conclusão da operação de busca do usuário no banco de dados antes de retornar o resultado.

O uso de `async` e `await` facilita a escrita de código assíncrono em JavaScript, tornando-o mais legível e fácil de entender.




