const useHistory = initialPresent => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent
  })

  const canUndo = state.past.length !== 0
  const canRedo = state.future.length !== 0

  // Setup our callback functions
  // We memoize with useCallback to prevent unecessary re-renders

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: 'UNDO' })
    }
  }, [canUndo, dispatch])

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: 'REDO' })
    }
  }, [canRedo, dispatch])

  const set = useCallback(newPresent => dispatch({ type: 'SET', newPresent }), [
    dispatch
  ])

  const clear = useCallback(() => dispatch({ type: 'CLEAR', initialPresent }), [
    dispatch
  ])

  // If needed we could also return past and future state
  return { state: state.present, set, undo, redo, clear, canUndo, canRedo }
}
