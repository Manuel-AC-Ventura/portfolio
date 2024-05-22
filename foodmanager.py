class Produto:
    def __init__(self, id_produto, nome, preco, quantidade):
        self.id_produto = id_produto
        self.nome = nome
        self.preco = preco
        self.quantidade = quantidade

    def atualizar_quantidade(self, quantidade):
        self.quantidade += quantidade

    def __str__(self):
        return f"{self.nome} (ID: {self.id_produto}) - Preço: {self.preco:.2f} Kz, Quantidade: {self.quantidade}"

class Pedido:
    def __init__(self, id_pedido, cliente):
        self.id_pedido = id_pedido
        self.cliente = cliente
        self.itens = []
        self.total = 0.0

    def adicionar_item(self, produto, quantidade):
        if produto.quantidade >= quantidade:
            self.itens.append((produto, quantidade))
            produto.atualizar_quantidade(-quantidade)  # Corrigido de 'quanto' para 'quantidade'
            self.total += produto.preco * quantidade
        else:
            print(f"Quantidade insuficiente para o produto {produto.nome}.")

    def __str__(self):
        itens_str = "\n".join([f"{quantidade}x {produto.nome} ({produto.preco:.2f} Kz cada)" for produto, quantidade in self.itens])
        return f"Pedido ID: {self.id_pedido}\nCliente: {self.cliente}\nItens:\n{itens_str}\nTotal: {self.total:.2f} Kz"

class Cliente:
    def __init__(self, id_cliente, nome, telefone):
        self.id_cliente = id_cliente
        self.nome = nome
        self.telefone = telefone

    def __str__(self):
        return f"Cliente {self.nome} (ID: {self.id_cliente}, Telefone: {self.telefone})"

class Farmacia:
    def __init__(self, nome):
        self.nome = nome
        self.estoque = {}
        self.pedidos = []
        self.clientes = {}

    def adicionar_produto(self, produto):
        self.estoque[produto.id_produto] = produto

    def adicionar_cliente(self, cliente):
        self.clientes[cliente.id_cliente] = cliente

    def criar_pedido(self, id_pedido, id_cliente):
        if id_cliente in self.clientes:
            pedido = Pedido(id_pedido, self.clientes[id_cliente])
            self.pedidos.append(pedido)
            return pedido
        else:
            print(f"Cliente com ID {id_cliente} não encontrado.")
            return None

    def __str__(self):
        estoque_str = "\n".join([str(produto) for produto in self.estoque.values()])
        return f"Farmácia {self.nome}\nEstoque:\n{estoque_str}"

# Exemplo de uso:
farmacia = Farmacia("Farmácia Exemplo")

# Adicionando produtos
farmacia.adicionar_produto(Produto(1, "Paracetamol", 500.00, 100))
farmacia.adicionar_produto(Produto(2, "Ibuprofeno", 1000.00, 50))

# Adicionando clientes
farmacia.adicionar_cliente(Cliente(1, "João Silva", "1234-5678"))
farmacia.adicionar_cliente(Cliente(2, "Maria Oliveira", "9876-5432"))

# Criando um pedido
pedido = farmacia.criar_pedido(1, 1)
if pedido:
    pedido.adicionar_item(farmacia.estoque[1], 2)
    pedido.adicionar_item(farmacia.estoque[2], 1)

print(farmacia)
print(pedido)
