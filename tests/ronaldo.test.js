import { describe, it, expect, beforeAll } from 'vitest'
import { ronaldo } from '../main'

describe('Validar Camisa 9', () => {
    let ronaldoVar;

    beforeAll(() => {
        ronaldoVar = ronaldo()
    })

    it('should ser camisa 9', () => {
        const { camisa } = ronaldoVar
        expect(camisa).toBe(9);
    })
    it('should be ronaldo', () => {
        const { nome } = ronaldoVar
        expect(nome).toBe('ronaldo')
    });
});