export function solution(estudiantes, deathCount, nuevo) {

    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
      estudiantes.push(nuevo);
      return estudiantes;
    
    
  }

  solution(["Nico", "Zule"], 0, "Santi")