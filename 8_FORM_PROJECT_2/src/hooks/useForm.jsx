import { useState } from 'react'
import React from 'react'

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0)


    return {
        currentStep,
        currentComponent: steps[currentStep]

    }

}