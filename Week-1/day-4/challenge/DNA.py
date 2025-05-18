import random

class Gene:
    def __init__(self, value=None):
        self.value = value if value is not None else random.randint(0, 1)

    def mutate(self):
        self.value = 1 - self.value  # Flip 0 to 1 or 1 to 0

    def __repr__(self):
        return str(self.value)

class Chromosome:
    def __init__(self, genes=None):
        if genes:
            self.genes = genes
        else:
            self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __repr__(self):
        return ''.join(str(gene) for gene in self.genes)

class DNA:
    def __init__(self, chromosomes=None):
        if chromosomes:
            self.chromosomes = chromosomes
        else:
            self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def __repr__(self):
        return '\n'.join(str(chromosome