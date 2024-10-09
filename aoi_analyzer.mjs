export class AOI_Analyzer {

    constructor() {

        this.aoi_values = [];
        this.THRESHOLD = 0.14;
        
        
    }

    calculate_max_value() {
        if (this.aoi_values.length === 0) {
            return 0; 
        }
        const max_aoi = Math.max(...this.aoi_values.map(item => item.aoi));
        return max_aoi;
    }

       
    calculate_average_aoi() {
        if (this.aoi_values.length === 0) {
            return 0;
        }

        const total_aoi = this.aoi_values.reduce((sum, item) => sum + item.aoi, 0);

        const average_aoi = total_aoi / this.aoi_values.length;

        return average_aoi;
    }
}