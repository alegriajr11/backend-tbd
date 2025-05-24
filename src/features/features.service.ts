import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FeaturesService {
    private flags: Record<string, boolean>

    constructor(){
        this.flags = JSON.parse(fs.readFileSync('features.json', 'utf-8'))
    }

    isEnable(features: string): boolean {
        return this.flags[features] ?? false
    }
}
