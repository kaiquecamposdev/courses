# Pratica

Class Tarefa

```java
package main.java.list.OperacoesBasicas;

public class Tarefa {

    private String descricao;

    public Tarefa(String descricao) {
        this.descricao = descricao;
    }
    public String getDescricao() {
        return descricao;
    }
    public static void main(String[] args){
        ListaTarefa listaTarefa = new ListaTarefa();

        listaTarefa.adicionarTarefa("Tarefa 1");
        listaTarefa.adicionarTarefa("Tarefa 1");
        listaTarefa.adicionarTarefa("Tarefa 2");
        System.out.println("Quantidade total de tarefas: " + listaTarefa.obterNumeroTotalTarefas());

        listaTarefa.removerTarefa("Tarefa 2");
        System.out.println("Quantidade total de tarefas: " + listaTarefa.obterNumeroTotalTarefas());

    }
}
```

Classe ListaTarefas 

```java
package main.java.list.OperacoesBasicas;

import java.util.ArrayList;
import java.util.List;

public class ListaTarefa {

    private List<Tarefa> tarefaList;

    public ListaTarefa() {
        this.tarefaList = new ArrayList<>();
    }

    public void adicionarTarefa(String descricao) {
        tarefaList.add(new Tarefa(descricao));
    }

    public void removerTarefa(String descricao) {
        List<Tarefa> removeList = new ArrayList<>();
        for(Tarefa t : tarefaList) {
            if(t.getDescricao().equalsIgnoreCase(descricao)) {
                removeList.add(t);
            }
        }
        tarefaList.removeAll(removeList);
    }
    public int obterNumeroTotalTarefas() {
        return tarefaList.size();
    }
    public void obterDescricoesTarefas() {
        System.out.println(tarefaList);
    }
}
```