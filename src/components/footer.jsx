export default {
    data () {
        return {
            author: 'jack'
        }
    },
    render () {
        return (
            <div id="footer">
                <span>writeen by {this.author}</span>
            </div>
        )
    }
}